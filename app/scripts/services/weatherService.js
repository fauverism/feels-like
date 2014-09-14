'use strict';

angular.module('feelsLikeApp')
  .factory('weatherService', ['Restangular',
    function (Restangular, $http, $q) {

//      $http.defaults.useXDomain = true;
//      delete $http.defaults.headers.common['X-Requested-With'];
//      $http.defaults.headers.post["Content-Type"] = "application/json";

      var weatherService = this,
      testService = "http://api.wunderground.com/api/d029755bddbad42d/conditions/q/NJ/Moorestown.json";

      weatherService.getWeatherService = function getWeatherService() {
        return $http.get(testService)
          .then(function(weatherData) {
            console.log(weatherData.data);//this is logging the whole object
            return {

            };
          });
      };

      weatherService.getWeatherInfo = function() {
        var weatherPromise = weatherService.getWeatherService();
        return $q.all([weatherPromise,weatherService])
            .then(function(resultArray) {
              var weatherData = resultArray[0];
              console.log(this);
              return _.extend(weatherData, {
                //console.log(this);
                //screens: weatherData
              });

            });
      };

      weatherService.postWeatherService = function postWeatherService() {
        var testStr = '{"m_screen":{"m_answers":{"QS0OLS":{"m_sQuestionUniqueCode":"QS0OLS","m_sQuestionGroupAttribute":"STUDYQUES","m_sChoices":["A"],"m_answerType":"RADIO","m_sDateFormat":"MM/dd/yyyy","m_bMetric":false,"m_state":{"m_bSaved":false,"m_lDisqualifyLogicId":-1,"m_lQstnrElementId":-1,"m_protocolsDq":[],"m_sProtocolDQInd":"N"}}},"m_basis_questions":{},"m_sUniqueQuestionCode":"QS0OLS","m_bEndState":false},"m_screening":{"m_lStudyId":5074,"m_phoneNumber":{"m_lStudyId":5074,"m_sNumber":"8002349TST","m_bTestNumber":true,"m_bDisplay":true,"m_locale":"en_US","m_bHoldingBin":false,"m_bCookies":false,"m_sUserCompanyCode":"ACUR","m_sCompanyTypeCode":"DTP","m_sSourceCode":"XX","m_sReferralCompanyCode":"ACUR","m_sReferralServiceCode":"ACUP","m_switchMap":{},"m_sTheme":"default","m_sFlow":"normal","m_alternateQuestionFlow":206,"m_alternateQuestionFlowDesc":"2349 - No Study Switch flow","b_abswitched":false,"m_lAbSwitchGroupId":-1,"m_lAbSwitchDetailId":-1,"m_lDesignGroupId":1,"m_lBrandId":0},"optionalParameters":{},"m_user":{"m_lUserId":134,"m_sUsername":"ols","m_sFirstName":"Online","m_sLastName":"Screening","m_bActive":true,"m_sCompanyCode":"OLS","m_bAdmin":false,"m_group":"INT_MANAGER"},"m_locale":"en_US","m_availableLocales":[],"m_first":{"m_sRawText":"Before you begin screening, please note the following:\u003cul\u003e\u003cli\u003eThe purpose of this health questionnaire is to see if you may be a good fit for one of several clinical trials for people with high cholesterol which is going on at many locations around the country.\u003c/li\u003e\u003cli\u003eIf you pass this initial screener, and wish to participate, your information will be shared with a research site of your choosing for further evaluation.\u003c/li\u003e\u003cli\u003eAll information that you share during this call will remain private. Acurian will not share your information with anyone without your permission, not even your doctor or health insurance company. Please read our \u003ca target\u003d\u0027BLANK\u0027 href \u003d \u0027https://www.acurian.com/privacypolicy.html\u0027\u003ePrivacy Policy\u003c/a\u003e for more details.\u003c/li\u003e\u003cli\u003eIf you qualify, and choose to participate, you may receive:\u003cul\u003e\u003cli\u003eEither an investigational medication for people with high cholesterol or placebo\u003c/li\u003e\u003cli\u003eStudy-related care from a local doctor who specializes in the treatment of high cholesterol\u003c/li\u003e\u003cli\u003eCompensation may be provided\u003c/li\u003e\u003c/ul\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/br\u003eBased on the information provided to you, would you like to proceed with the questionnaire?","m_sText":"Before you begin screening, please note the following:\u003cul\u003e\u003cli\u003eThe purpose of this health questionnaire is to see if you may be a good fit for one of several clinical trials for people with high cholesterol which is going on at many locations around the country.\u003c/li\u003e\u003cli\u003eIf you pass this initial screener, and wish to participate, your information will be shared with a research site of your choosing for further evaluation.\u003c/li\u003e\u003cli\u003eAll information that you share during this call will remain private. Acurian will not share your information with anyone without your permission, not even your doctor or health insurance company. Please read our \u003ca target\u003d\u0027BLANK\u0027 href \u003d \u0027https://www.acurian.com/privacypolicy.html\u0027\u003ePrivacy Policy\u003c/a\u003e for more details.\u003c/li\u003e\u003cli\u003eIf you qualify, and choose to participate, you may receive:\u003cul\u003e\u003cli\u003eEither an investigational medication for people with high cholesterol or placebo\u003c/li\u003e\u003cli\u003eStudy-related care from a local doctor who specializes in the treatment of high cholesterol\u003c/li\u003e\u003cli\u003eCompensation may be provided\u003c/li\u003e\u003c/ul\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/br\u003eBased on the information provided to you, would you like to proceed with the questionnaire?","m_answerType":"RADIO","m_sUniqueCode":"QS0OLS","m_sCode":"QGI2349W","m_sGroupAttribute":"STUDYQUES","m_choiceSource":{"m_sCode":"QAC","m_sSourceTable":"question_answer_choice"},"m_fOrder":1.0,"m_iMaxLength":0,"m_bRequired":true,"m_subs":[],"m_bMetric":false,"m_iLogicCount":0,"m_lQstnrElementId":29585},"m_type":"OLS","m_state":{"m_lOriginalPatientId":-1,"m_lPatientId":-1,"m_lCallId":25368749,"m_iDispoCode":50,"m_sStatus":"C","m_reason":"SSOLS","m_abortReason":"NONE","m_startTime":"Aug 27, 2014 1:42:11 PM","m_endTime":"Aug 27, 2014 1:42:11 PM","m_protocols":[],"m_bSavedGeocode":false,"b_picked_site":false,"m_screening_status":"ALLOW_RESCREEN"},"m_answers":{"m_map":{},"m_all":[],"m_flow":[],"m_removes":[],"m_basis":{}},"m_progress":"BEGIN","m_switchState":{"m_history":[]},"m_lAppVersion":2,"m_verityScore":-1,"m_relevantFraudScore":0,"m_relevantDupeScore":100,"b_singleSiteRuleApplies":false,"m_bFirstQuestionRedirect":false}}';

        console.log('testJSON: ' + testStr);

        $.ajax({
          type: "POST",
          url: "http://dev-ols.acurian.com:8090/next-question-ws.htm",
          async: true,
          cache: false,
          dataType: 'text',
          data: testStr,
          success: function(data) {
            console.log('this happened' + data);
          }
        })
            .done(function() {
              console.log('this worked ' + this);
            });
      };

      weatherService.postWeatherInfo = function() {

        var weatherPromise = weatherService.postWeatherService();

        return $q.all([weatherPromise, weatherService])
            .then(function(resultArray) {
              var screenData = resultArray;
              //console.log(resultArray);
              return _.extend(screenData, {
                screens: screenData
              });
            });

      };

    }]);