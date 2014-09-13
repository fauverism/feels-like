angular.module('restangularDemoApp', [
  'restangular',
  'ngCookies'
])
    .constant('apiKey', 'YOUR_Mongolab_API_KEY')
    .config(function(RestangularProvider, apiKey) {
      RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/YOURDATABASE/collections');
      RestangularProvider.setDefaultRequestParams({
        apiKey: apiKey
      })
      RestangularProvider.setRestangularFields({
        id: '_id.$oid'
      });

      RestangularProvider.setRequestInterceptor(
          function(elem, operation, what) {

            if (operation === 'put') {
              elem._id = undefined;
              return elem;
            }
            return elem;
          })
    })
    .factory('Messages', [
      '$rootScope', '$cookieStore', 'Restangular',
      function($rootScope, $cookieStore, Restangular) {
        var messageService =
                Restangular.all('message'),
            authorService =
                Restangular.all('authors');

        var service = {
          thisAuthor: function() {
            var author;
            if (!$cookieStore.get('thisAuthor')) {
              author = {
                id: guid()
              };
              $cookieStore.put('thisAuthor', author);
              authorService.post(author);
            } else {
              author = $cookieStore.get('thisAuthor');
            }
            return author;
          },
          addMessage: function(msg) {
            var newMsg = msg;
            newMsg.author = service.thisAuthor().id;
            newMsg.createdAt = new Date();
            $rootScope.$broadcast('messages:added');
            return messageService.post(newMsg);
          },
          getMessages: function() {
            return messageService.getList();
          },
          removeMessage: function(msg) {
            $rootScope.$broadcast('messages:removed');
            return msg.remove();
          },
          updateMessage: function(msg) {
            $rootScope.$broadcast('messages:updated');
            return msg.put();
          },
          getAuthorMessages: function() {
            var params = {
              author: service.thisAuthor().id
            };
            return messageService.getList({q: params});
          }
        };
        return service;
      }
    ])
    .controller('MessageController', [
      '$scope', '$timeout', 'Messages', 'Restangular',
      function($scope, $timeout,
               Messages, Restangular) {
        var thisAuthor = Messages.thisAuthor(),
            updateMessageTimeout = undefined;

        $scope.showEdit = false;
        $scope.editMessage = undefined;
        $scope.messages = Messages.getMessages();

        var updateMessages = function() {
          if (updateMessageTimeout) $timeout.cancel(updateMessageTimeout);

          updateMessageTimeout = $timeout(function() {

            $scope.$apply(function() {
              Messages.getMessages().then(function(d) {
                $scope.messages = d;
              });
            });
          }, 500);
        }

        $scope.$on('messages:added', updateMessages);
        $scope.$on('messages:removed', updateMessages);
        $scope.$on('messages:updated', updateMessages);

        $scope.showEditMessage = function(msg) {
          $scope.editMessage = Restangular.copy(msg);
          $scope.showEdit = true;
        }

        $scope.saveEdit = function() {
          Messages.updateMessage($scope.editMessage)
              .then(function(data) {
                $scope.editMessage = undefined;
                $scope.showEdit = false;
              });
        }

        $scope.addMessage = function() {
          Messages.addMessage($scope.newMessage);
          $scope.authorMessagesEmpty = false;
          $scope.newMessage = {};
        };

        $scope.removeMessage = function(msg) {
          Messages.removeMessage(msg);
        }

        $scope.authorMessagesEmpty = false;
        $scope.getAuthorMessages = function() {
          Messages.getAuthorMessages().then(function(d) {
            if (d.length === 0) {
              $scope.authorMessagesEmpty = true;
            } else {
              $scope.authorMessages = d;
            }
          });
        }
      }]);