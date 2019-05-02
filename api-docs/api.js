$(function() {

  function getUrlParams(q) {
    var params = {};
    var vars = q.split('&');
    for(var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return params;
  }

  function getResource(uParams) {
    var hubName = uParams['hub'];
    if(uParams['resource'] != null) {
      return uParams['resource'];
    }
    else if(hubName != null && hubName != undefined) {
      return null;
    } else if(uParams['elementId'] != null && uParams['elementId'] != undefined) {
      return null;
    } else if(uParams['element'] != null) {
      return null;
    } else {
      return "all";
    }
  }

  // FOR REF: This is the only getDocsUrl that get's called
  function getDocsUrl(uParams) {
    var hubName = uParams['hub'];
    var resource = uParams['resource'];
    if(resource != null) {
      return "https://api.cloud-elements.com/elements/api-v2/docs/" + resource;
    }
    else if(hubName != null && hubName != undefined) {
      return "https://api.cloud-elements.com/elements/api-v2/docs/" + hubName;
    } else if(uParams['elementId'] != null && uParams['elementId'] != undefined) {
      return "https://api.cloud-elements.com/elements/api-v2/elements/" + uParams['elementId'] + "/docs?version=-1";
    } else if(uParams['element'] != null) {
      var url = "https://api.cloud-elements.com/elements/api-v2/docs/" + uParams['element'];
      if(uParams && uParams.elementKey) {
        url += "?elementKey=" + uParams.elementKey;
      }

      if(uParams && uParams.elementName) {
        url += "&elementName=" + urlParams.elementName;
      }
      return url;
    } else {
      return "https://api.cloud-elements.com/elements/api-v2/docs/all";
    }
  }

  function getAuthorizationHeaderValue(uParams) {
    var user = decodeURIComponent(uParams.userSecret);
    var org = uParams.orgSecret;
    var token = null;

    if(uParams.token !== undefined) {
      token = decodeURIComponent(uParams.token);
    }

    var header = 'User ' + user + ', Organization ' + org;
    if(token != null) {
      header = header + ', Element ' + token;
    }

    if(user != null && user != undefined && org != null && org != undefined) {
      return header;
    } else {
      return null;
    }
  }

  function getAuthorizationHeader(uParams) {
    var authVal = getAuthorizationHeaderValue(uParams);
    if(authVal != null && authVal != undefined) {
      return {
        'Authorization': authVal
      }
    }

    return null;
  }

  function getDefaultParams(uParams) {
    var authVal = getAuthorizationHeaderValue(uParams);
    if(authVal != null && authVal != undefined) {
      return [
        {paramKey: 'Authorization', defaultValue: authVal }
      ];
    } else {
      return null;
    }
  }

  function expandDocs(uParams) {
      var urlRes = getResource(urlParams);
      if(urlRes =='all_platform' || urlRes =='all_hubs' || urlRes =='all') {
        return null;
      }
    return "list";
  }

  var urlParams = getUrlParams(window.location.search.substring(1));
  var defaultParams = getDefaultParams(urlParams);
  var authorizations = getAuthorizationHeader(urlParams);
  var url = getDocsUrl(urlParams);
  var docExpansion = expandDocs(urlParams);
  window.swaggerUi = new SwaggerUi({
    url: url,
    swaggerRequestHeaders: authorizations,
    defaultParams: defaultParams,
    validatorUrl: null,
    dom_id: "swagger-ui-container",
    sampleModel: true,
    apisSorter: "alpha",
    docExpansion: docExpansion,
    showInfo: false,
    supportedSubmitMethods: [],
    onComplete: function(swaggerApi, swaggerUi) {
      console.log("Loaded SwaggerUI");


      //With Swagger 2.0 it expects all the docs to be in single JSON
      //Because of this between the hubs the resources get mixed up.
      // To render the hubs documentation currectly disabling the click action of swagger and updating the href url to
      // rerender index.html with just the selected hub

      var urlRes = getResource(urlParams);
      if(urlRes =='all_hubs' || urlRes =='all') {
        //modify the hubs
        $('a[href="#!/crm"]').text("hubs/crm");
        $('#endpointListTogger_crm').text("Show/Hide");
        $('a[href="#!/crm"]').unbind("click");
        $('a[href="#!/crm"]').prop("href","/?resource=crm");

        $('a[href="#!/documents"]').text("hubs/documents");
        $('#endpointListTogger_documents').text("Show/Hide");
        $('a[href="#!/documents"]').unbind("click");
        $('a[href="#!/documents"]').prop("href","/?resource=documents");

        $('a[href="#!/erp"]').text("hubs/erp");
        $('#endpointListTogger_erp').text("Show/Hide");
        $('a[href="#!/erp"]').unbind("click");
        $('a[href="#!/erp"]').prop("href","/?resource=erp");

        $('a[href="#!/finance"]').text("hubs/finance");
        $('#endpointListTogger_finance').text("Show/Hide");
        $('a[href="#!/finance"]').unbind("click");
        $('a[href="#!/finance"]').prop("href","/?resource=finance");

        $('a[href="#!/helpdesk"]').text("hubs/helpdesk");
        $('#endpointListTogger_helpdesk').text("Show/Hide");
        $('a[href="#!/helpdesk"]').unbind("click");
        $('a[href="#!/helpdesk"]').prop("href","/?resource=helpdesk");

        $('a[href="#!/humancapital"]').text("hubs/humancapital");
        $('#endpointListTogger_humancapital').text("Show/Hide");
        $('a[href="#!/humancapital"]').unbind("click");
        $('a[href="#!/humancapital"]').prop("href","/?resource=humancapital");

        $('a[href="#!/infrastructure"]').text("hubs/infrastructure");
        $('#endpointListTogger_infrastructure').text("Show/Hide");
        $('a[href="#!/infrastructure"]').unbind("click");
        $('a[href="#!/infrastructure"]').prop("href","/?resource=infrastructure");

        $('a[href="#!/marketing"]').text("hubs/marketing");
        $('#endpointListTogger_marketing').text("Show/Hide");
        $('a[href="#!/marketing"]').unbind("click");
        $('a[href="#!/marketing"]').prop("href","/?resource=marketing");

        $('a[href="#!/messaging"]').text("hubs/messaging");
        $('#endpointListTogger_messaging').text("Show/Hide");
        $('a[href="#!/messaging"]').unbind("click");
        $('a[href="#!/messaging"]').prop("href","/?resource=messaging");

        $('a[href="#!/social"]').text("hubs/social");
        $('#endpointListTogger_social').text("Show/Hide");
        $('a[href="#!/social"]').unbind("click");
        $('a[href="#!/social"]').prop("href","/?resource=social");

        $('a[href="#!/idmanagement"]').text("hubs/idmanagement");
        $('#endpointListTogger_idmanagement').text("Show/Hide");
        $('a[href="#!/idmanagement"]').unbind("click");
        $('a[href="#!/idmanagement"]').prop("href","/?resource=idmanagement");

        $('a[href="#!/ecommerce"]').text("hubs/ecommerce");
        $('#endpointListTogger_ecommerce').text("Show/Hide");
        $('a[href="#!/ecommerce"]').unbind("click");
        $('a[href="#!/ecommerce"]').prop("href","/?resource=ecommerce");

      }

      $('pre code').each(function(i, e) {
        hljs.highlightBlock(e)
      });
    },
    openResource: function(elText) {
      window.open = "api-docs2/index.html?resource=" + elText;
    },
    onFailure: function(data) {
      console.log("Unable to Load SwaggerUI");
    },
    onPreRequest: function(model, map, opts) {

      var maintainSession = urlParams['maintainSession'];
      if(maintainSession != null && (maintainSession == true || maintainSession == "true")) {
        //Added the session header to map
        map['Elements-Session'] = true;
        //Added the session header to model parameters
        model.parameters.push({
          'name': 'Elements-Session',
          'in': 'header',
          'required': 'true',
          'defaultValue': true
        });
      }

      var saveAsDefault = urlParams['saveAsDefault'];
      if(saveAsDefault != null && (saveAsDefault == true || saveAsDefault == "true")) {
        //Added the saveAsDefault to map
        map['saveAsDefault'] = true;
        //Added the saveAsDefault to model parameters
        model.parameters.push({
          'name': 'saveAsDefault',
          'in': 'query',
          'required': 'false',
          'defaultValue': true
        });
      }
    },
    onPostRequest: function(code, content, contentType, headers, pre, response_body, url) {
      //Any Post request logic
    }
  });

  window.swaggerUi.load();
});
