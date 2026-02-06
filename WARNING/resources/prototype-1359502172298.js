(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "95679c40-c833-465c-affe-fb87afe6543b": "home",
    "3dc3a787-f820-4ad9-a104-af0d58aab1d2": "Tem",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "5f33fcfd-26ef-409c-a461-95e7e49e8bca": "T",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 0acccbce-c9df-4a45-a84e-8d0acbbfa1be.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#0062B8",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#0062B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#0062B8",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#0062B8",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 0acccbce-c9df-4a45-a84e-8d0acbbfa1be.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "target": "#s-Input_6"
                      },"1" ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "target": "#s-Input_6"
                      },"1" ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 4a857709-4ca7-43c0-aa2f-60b9d41a6ce1.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#C44741",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#C44741",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#C44741",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#C44741",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 4a857709-4ca7-43c0-aa2f-60b9d41a6ce1.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 6166d715-3ad0-46bd-920f-901d0ae9f8f4.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#292929",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#292929",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#292929",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#292929",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 6166d715-3ad0-46bd-920f-901d0ae9f8f4.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 872cdfbc-2ac6-46f9-a4fa-c705612db8a0.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#52A552",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#52A552",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#52A552",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#52A552",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 872cdfbc-2ac6-46f9-a4fa-c705612db8a0.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_off"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_on"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 516bc2c0-5829-43ce-a95f-c8de9278687f.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#E1962D",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#E1962D",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#E1962D",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#E1962D",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 516bc2c0-5829-43ce-a95f-c8de9278687f.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_85")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/95679c40-c833-465c-affe-fb87afe6543b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_66")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_7"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_67")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_7"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_68")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_69")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_70")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_10"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_73")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_10"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_74")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_75")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_76")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_12"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_77")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_12"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unchecked_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_13"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-checked_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_13"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-on_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-off_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-off_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-on_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-on")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-off"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-off")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-on"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] c5612a89-2e9e-4afb-bf30-539e2310d4a9.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#CDCDCD",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] c5612a89-2e9e-4afb-bf30-539e2310d4a9.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "url('./images/[Generated] 3b28b65f-6ca8-46b7-807c-c361411107b6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 3b28b65f-6ca8-46b7-807c-c361411107b6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Unlock_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Unlock_button",
                    "type": "movewithcursor",
                    "containment": true,
                    "axis": "x"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-state_on")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_off"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-state_off")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_on"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#74B9EF",
                        "background-image": "url('./images/[Generated] 1f1be263-ddb4-47a2-a3c9-fc52e5725b59.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 1f1be263-ddb4-47a2-a3c9-fc52e5725b59.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#74B9EF",
                        "background-image": "url('./images/[Generated] 84253eeb-f12f-4a29-a806-8c0cce3a1698.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 + 0 + 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 84253eeb-f12f-4a29-a806-8c0cce3a1698.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 + 0 + 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] e697c206-2304-4d1e-9827-ecb122144c4b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] e697c206-2304-4d1e-9827-ecb122144c4b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 3d38a4b3-14d1-42ea-b82c-2c35686628a0.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 3d38a4b3-14d1-42ea-b82c-2c35686628a0.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] e4c4aaf8-657f-4ccf-85d5-d1342fedb53c.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] e4c4aaf8-657f-4ccf-85d5-d1342fedb53c.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] a16bf5db-89ec-43cb-befa-4241f16931b4.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] a16bf5db-89ec-43cb-befa-4241f16931b4.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#CCCCCC",
                        "background-image": "url('./images/[Generated] 6acb32f1-749d-420a-9192-5ff59dce269b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 6acb32f1-749d-420a-9192-5ff59dce269b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#CCCCCC",
                        "background-image": "url('./images/[Generated] bc1b4016-3d89-45fa-affd-31803ffd6e74.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 + 0 + 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] bc1b4016-3d89-45fa-affd-31803ffd6e74.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 + 0 + 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] d59b4c7b-d046-4c89-801d-9206ae6d10ee.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#0062B8",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#0062B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#0062B8",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#0062B8",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] d59b4c7b-d046-4c89-801d-9206ae6d10ee.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "url('./images/[Generated] 0881500f-40cf-4292-a6eb-42ceec0fe4ef.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 0881500f-40cf-4292-a6eb-42ceec0fe4ef.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 9f85c760-857c-42cc-ba40-eb075f3b8856.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#C44741",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#C44741",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#C44741",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#C44741",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 9f85c760-857c-42cc-ba40-eb075f3b8856.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 5783ecde-9b9f-466e-be36-f4861f9fd4e8.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#292929",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#292929",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#292929",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#292929",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 5783ecde-9b9f-466e-be36-f4861f9fd4e8.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] cddd7124-b32b-4f23-b2df-9a989d110c8b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#52A552",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#52A552",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#52A552",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#52A552",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] cddd7124-b32b-4f23-b2df-9a989d110c8b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 9b11b338-2666-4402-8198-a00424f46536.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#E1962D",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#E1962D",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#E1962D",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#E1962D",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 9b11b338-2666-4402-8198-a00424f46536.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 07c79680-5033-4eb8-8be5-c8d7ea449256.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 07c79680-5033-4eb8-8be5-c8d7ea449256.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 69a28c2a-63a3-40b4-83b4-688f19229129.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 69a28c2a-63a3-40b4-83b4-688f19229129.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] f73bbb7b-6a7e-460b-bde4-a7e86acba3af.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] f73bbb7b-6a7e-460b-bde4-a7e86acba3af.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 36ea34ab-3c1d-4304-a556-9ddc8b3dfb27.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 36ea34ab-3c1d-4304-a556-9ddc8b3dfb27.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_13")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-95679c40-c833-465c-affe-fb87afe6543b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rich_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });