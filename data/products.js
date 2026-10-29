// Curated structured knowledge. Product names and examples are not classification rules.
window.WEEE_PRODUCTS = {
  "version": "2026-10-29-chinese-ui-1",
  "schemaVersion": 1,
  "records": [
    {
      "id": "p_845ff9e4b79f1a5a",
      "name": "即热式热水器",
      "officialName": "Durchlauferhitzer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_845ff9e4b79f1a5a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_845ff9e4b79f1a5a"
          ]
        }
      },
      "evidenceIds": [
        "ear_845ff9e4b79f1a5a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Durchlauferhitzer",
          "本条目为即热式热水器，不包含储水式温度交换设备"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e60eadf765671a09",
      "name": "自动充气气垫",
      "officialName": "Luftmatratze, selbstaufblasend",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "mattress",
        "required": []
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e60eadf765671a09"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e60eadf765671a09"
          ]
        }
      },
      "evidenceIds": [
        "ear_e60eadf765671a09"
      ],
      "presentation": {
        "defaultsText": [
          "普通完整充气气垫，可用于私人家庭",
          "柔性设备按折叠或卷起后的最紧凑状态测量"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_eaa76ef42f2c37b8",
      "name": "热像仪",
      "officialName": "Wärmebildkamera",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eaa76ef42f2c37b8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_eaa76ef42f2c37b8"
          ]
        }
      },
      "evidenceIds": [
        "ear_eaa76ef42f2c37b8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Wärmebildkamera",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_10e36a1a7768003c",
      "name": "游戏控制设备（摇杆、方向盘、踏板等）",
      "officialName": "Gaming-Hardware (Joystick, Lenkrad, Pedal usw.)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_10e36a1a7768003c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_10e36a1a7768003c"
          ]
        }
      },
      "evidenceIds": [
        "ear_10e36a1a7768003c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Gaming-Hardware (Joystick, Lenkrad, Pedal usw.)",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_847e2b4261c622f1",
      "name": "健身追踪器",
      "officialName": "Fitnesstracker",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_847e2b4261c622f1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_847e2b4261c622f1"
          ]
        }
      },
      "evidenceIds": [
        "ear_847e2b4261c622f1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Fitnesstracker",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_04ff627a6c853f9a",
      "name": "交流储能设备（内置逆变器）",
      "officialName": "AC-Batteriespeicher mit integriertem Wechselrichter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "integratedInverter",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_04ff627a6c853f9a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_04ff627a6c853f9a"
          ]
        }
      },
      "evidenceIds": [
        "ear_04ff627a6c853f9a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：AC-Batteriespeicher mit integriertem Wechselrichter",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_eaaedf4ff79fa9ae",
      "name": "LED 光源（含带扬声器等附加功能型号）",
      "officialName": "LED-Lampe (auch mit Zusatzfunktionen z.B. LED-Lampe mit Lautsprecher)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "lamp",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eaaedf4ff79fa9ae"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_eaaedf4ff79fa9ae"
          ]
        }
      },
      "evidenceIds": [
        "ear_eaaedf4ff79fa9ae"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：LED-Lampe (auch mit Zusatzfunktionen z.B. LED-Lampe mit Lautsprecher)",
          "独立光源，具有标准灯头；完整灯具不适用"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_6a22b37b735bcaf5",
      "name": "DAT 数字录音磁带",
      "officialName": "Datkassette",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6a22b37b735bcaf5"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_6a22b37b735bcaf5"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_2353f5f55701008d",
      "name": "预装控制柜",
      "officialName": "vorkonfektionierter Schaltschrank",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "cabinetElectric",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2353f5f55701008d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2353f5f55701008d"
          ]
        }
      },
      "evidenceIds": [
        "ear_2353f5f55701008d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：vorkonfektionierter Schaltschrank"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_643c5daed91d024d",
      "name": "音乐贺卡",
      "officialName": "Musik-Grußkarte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_643c5daed91d024d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_643c5daed91d024d"
          ]
        }
      },
      "evidenceIds": [
        "ear_643c5daed91d024d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Musik-Grußkarte",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a0c4eb4166e35c8f",
      "name": "业余无线电接收器/发射器",
      "officialName": "Amateurfunkempfänger/-sender",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a0c4eb4166e35c8f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a0c4eb4166e35c8f"
          ]
        }
      },
      "evidenceIds": [
        "ear_a0c4eb4166e35c8f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Amateurfunkempfänger/-sender",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_6bca1d465a00f7d6",
      "name": "红外加热器",
      "officialName": "Infrarotheizung",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6bca1d465a00f7d6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_6bca1d465a00f7d6"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b8df6d1da2c44818",
      "name": "气体放电灯",
      "officialName": "Gasentladungslampe",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "gas",
            "household": "yes"
          },
          {
            "kind": "lamp",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b8df6d1da2c44818"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b8df6d1da2c44818"
          ]
        }
      },
      "evidenceIds": [
        "ear_b8df6d1da2c44818"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Gasentladungslampe",
          "独立光源，具有标准灯头；完整灯具不适用"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d03c41a38b802821",
      "name": "充电宝租赁站",
      "officialName": "Powerbank Verleihstation",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d03c41a38b802821"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_d03c41a38b802821"
          ]
        }
      },
      "evidenceIds": [
        "ear_d03c41a38b802821"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Powerbank Verleihstation",
          "完整的充电宝租借/充电站",
          "充电宝与租借站分别核对，带附加电气功能的充电宝可能属于独立设备",
          "充电宝还需另行考虑电池法规"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e87b749f255b8359",
      "name": "电池连接线（带接线鼻）",
      "officialName": "Batteriekabel mit Kabelschuhen",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e87b749f255b8359"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e87b749f255b8359"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3f0a7ed973622f1e",
      "name": "污水提升装置",
      "officialName": "Hebeanlage",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3f0a7ed973622f1e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3f0a7ed973622f1e"
          ]
        }
      },
      "evidenceIds": [
        "ear_3f0a7ed973622f1e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Hebeanlage",
          "用于排放废水的提升设备",
          "按废水提升设备的完整产品形态考虑",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_bd9963eeca248d43",
      "name": "户外及露营太阳能系统",
      "officialName": "Solaranlage für Outdoor, Garten, Camping",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "pvArea",
          "size"
        ],
        "variants": [
          {
            "kind": "largePV",
            "household": "yes"
          },
          {
            "kind": "smallPV",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bd9963eeca248d43"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_bd9963eeca248d43"
          ]
        }
      },
      "evidenceIds": [
        "ear_bd9963eeca248d43"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Solaranlage für Outdoor, Garten, Camping",
          "移动式或折叠式太阳能板，带 USB 接口"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0d81e50bf1501827",
      "name": "防冻加热电缆",
      "officialName": "Frostschutz-Heizleitung",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0d81e50bf1501827"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0d81e50bf1501827"
          ]
        }
      },
      "evidenceIds": [
        "ear_0d81e50bf1501827"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Frostschutz-Heizleitung",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0acb1d928308126d",
      "name": "手机、平板及笔记本电脑内置配件",
      "officialName": "Ersatzteile zum Einbau für Handy, Smartphone, Tablet, Laptop",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0acb1d928308126d"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_0acb1d928308126d"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_55bb22c39b14edb4",
      "name": "单板电脑用迷你 LED 交通灯模块",
      "officialName": "Mini LED Ampelmodul für Einplatinencomputer",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_55bb22c39b14edb4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_55bb22c39b14edb4"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7813296ab0d472a3",
      "name": "干湿两用吸尘器",
      "officialName": "Nass-/Trockensauger",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7813296ab0d472a3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7813296ab0d472a3"
          ]
        }
      },
      "evidenceIds": [
        "ear_7813296ab0d472a3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Nass-/Trockensauger",
          "尺寸不计入无电气功能的软管、吸管等附件"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ebc7dc021b19f418",
      "name": "倒车摄像头",
      "officialName": "Rückfahrkamera",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ebc7dc021b19f418"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ebc7dc021b19f418"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_400fd82b6f1374ba",
      "name": "便携式太阳能充电器",
      "officialName": "tragbares Solar-Ladegerät",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_400fd82b6f1374ba"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_400fd82b6f1374ba"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1d214c13e9f04c23",
      "name": "车载 GPS 设备（含即插即用型号）",
      "officialName": "GPS-Gerät für Kfz (z.B. per Plug & Play betriebene)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1d214c13e9f04c23"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_1d214c13e9f04c23"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_bc75711b4ee274b6",
      "name": "带交流插座的便携式储能电源",
      "officialName": "Tragbare Powerstation mit Wechselstromanschluss",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bc75711b4ee274b6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_bc75711b4ee274b6"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_77f584986a5cd73e",
      "name": "信息通信数据线",
      "officialName": "ITK-Datenkabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_77f584986a5cd73e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_77f584986a5cd73e"
          ]
        }
      },
      "evidenceIds": [
        "ear_77f584986a5cd73e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：ITK-Datenkabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c8c1a96cc66b8ea6",
      "name": "汽车拖车连接适配器",
      "officialName": "Kfz-Anhänger-Adapter",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c8c1a96cc66b8ea6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c8c1a96cc66b8ea6"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0be379684b49be2e",
      "name": "安卓车载多媒体收音机",
      "officialName": "Android Autoradio",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0be379684b49be2e"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_0be379684b49be2e"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_407a429af3211b57",
      "name": "自平衡车（带或不带扶手）",
      "officialName": "Selbstbalancierendes Fahrzeug (mit oder ohne Haltestange)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_407a429af3211b57"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_407a429af3211b57"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1bb534d23aa988e6",
      "name": "延长线（音频、电源）",
      "officialName": "Verlängerungskabel (Audio, Strom)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "finishedCable"
        ],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1bb534d23aa988e6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1bb534d23aa988e6"
          ]
        }
      },
      "evidenceIds": [
        "ear_1bb534d23aa988e6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Verlängerungskabel (Audio, Strom)",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3add27e1227fba82",
      "name": "小型电器连接线",
      "officialName": "Kleingerätekabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3add27e1227fba82"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3add27e1227fba82"
          ]
        }
      },
      "evidenceIds": [
        "ear_3add27e1227fba82"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Kleingerätekabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_12ca69471cb25c06",
      "name": "电气功能服装（加热、按摩、灯光等）",
      "officialName": "Bekleidung mit elektrischen Funktionen (mit Heiz-/Massage-/Leuchtfunktionen usw.)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_12ca69471cb25c06"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_12ca69471cb25c06"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_22506fb57a444489",
      "name": "内存（RAM）",
      "officialName": "RAM Random-Access Memory",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_22506fb57a444489"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_22506fb57a444489"
          ]
        }
      },
      "evidenceIds": [
        "ear_22506fb57a444489"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：RAM Random-Access Memory",
          "供 PC 内部安装的设备",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1609ed41cf24db22",
      "name": "电脑内置水冷散热装置",
      "officialName": "interne Wasserkühlung für PC",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes",
          "size": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 将 PC 内部水冷设备列为小型信息通信设备；具体组件与销售形态仍应核实。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1609ed41cf24db22"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1609ed41cf24db22"
          ]
        },
        "size": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_1609ed41cf24db22"
          ]
        }
      },
      "evidenceIds": [
        "ear_1609ed41cf24db22"
      ],
      "presentation": {
        "defaultsText": [
          "用于 PC 内部安装的水冷设备",
          "可用于私人家庭",
          "外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ade3e451dbe94054",
      "name": "实验室和工业用分析仪",
      "officialName": "Analysegerät für Labore und Industrie",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ade3e451dbe94054"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_ade3e451dbe94054"
          ]
        }
      },
      "evidenceIds": [
        "ear_ade3e451dbe94054"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Analysegerät für Labore und Industrie"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b53fc773330cd2aa",
      "name": "屋顶、房车及船舶等用光伏组件",
      "officialName": "Photovoltaikmodul auf Hausdächern, Wohnwagen, Booten usw.",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "largePV",
            "household": "yes"
          },
          {
            "kind": "smallPV",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b53fc773330cd2aa"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b53fc773330cd2aa"
          ]
        }
      },
      "evidenceIds": [
        "ear_b53fc773330cd2aa"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Photovoltaikmodul auf Hausdächern, Wohnwagen, Booten usw."
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3047f0c89b239e2e",
      "name": "美发及身体护理设备",
      "officialName": "Haar- und Körperpflegegerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3047f0c89b239e2e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3047f0c89b239e2e"
          ]
        }
      },
      "evidenceIds": [
        "ear_3047f0c89b239e2e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Haar- und Körperpflegegerät",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4fc9bc1a945113f4",
      "name": "音乐器材（不含教堂管风琴）",
      "officialName": "Musikausrüstung (mit Ausnahme von Kirchenorgeln)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4fc9bc1a945113f4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4fc9bc1a945113f4"
          ]
        }
      },
      "evidenceIds": [
        "ear_4fc9bc1a945113f4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Musikausrüstung (mit Ausnahme von Kirchenorgeln)"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_5e941ebe1def7455",
      "name": "仅限工业或医疗用途的触摸屏",
      "officialName": "Touch Panel für ausschließlich industrielle oder medizinische Zwecke",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5e941ebe1def7455"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_5e941ebe1def7455"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_827e7db12259c2d1",
      "name": "液晶相框和数码相框",
      "officialName": "LCD-Fotorahmen und digitaler Bilderrahmen",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_827e7db12259c2d1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_827e7db12259c2d1"
          ]
        }
      },
      "evidenceIds": [
        "ear_827e7db12259c2d1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：LCD-Fotorahmen und digitaler Bilderrahmen",
          "该类独立显示设备不受屏幕尺寸限制"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7e1bc5d0439e0094",
      "name": "道路照明用气体放电灯／LED 光源",
      "officialName": "Gasentladungslampe/LED-Lampe für öffentliche Straßenbeleuchtung",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "lamp",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7e1bc5d0439e0094"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_7e1bc5d0439e0094"
          ]
        }
      },
      "evidenceIds": [
        "ear_7e1bc5d0439e0094"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Gasentladungslampe/LED-Lampe für öffentliche Straßenbeleuchtung"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_9e40ee572bbe8f88",
      "name": "排气阀门控制器",
      "officialName": "Auspuffklappensteuerung",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9e40ee572bbe8f88"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_9e40ee572bbe8f88"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8714b28510ec5e10",
      "name": "连接端子",
      "officialName": "Verbindungsklemme",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8714b28510ec5e10"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_8714b28510ec5e10"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e198679bd6ef306f",
      "name": "医疗及工业用特种灯",
      "officialName": "Speziallampe für medizinische und industrielle Zwecke",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "lamp",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e198679bd6ef306f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_e198679bd6ef306f"
          ]
        }
      },
      "evidenceIds": [
        "ear_e198679bd6ef306f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Speziallampe für medizinische und industrielle Zwecke"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_68e8f06c35bb3ea7",
      "name": "汽车拖车照明套件",
      "officialName": "Beleuchtungssatz für Kfz-Anhänger",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_68e8f06c35bb3ea7"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_68e8f06c35bb3ea7"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b49fe29388f1b552",
      "name": "数据录入扫描笔",
      "officialName": "Scannerstift zur Dateneingabe",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b49fe29388f1b552"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_b49fe29388f1b552"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_488983233d83f4ed",
      "name": "电动门锁",
      "officialName": "Motorschloss",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_488983233d83f4ed"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_488983233d83f4ed"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7bec32a8fd91dcea",
      "name": "带压电点火器的燃气烧烤炉",
      "officialName": "Gasgrill mit elektrischem Piezozünder",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7bec32a8fd91dcea"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_7bec32a8fd91dcea"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ed910ce108324916",
      "name": "电动猫门",
      "officialName": "Katzenklappe, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ed910ce108324916"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ed910ce108324916"
          ]
        }
      },
      "evidenceIds": [
        "ear_ed910ce108324916"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Katzenklappe, elektrisch",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_381382f1dc84345b",
      "name": "建筑加热器",
      "officialName": "Bauheizer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_381382f1dc84345b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_381382f1dc84345b"
          ]
        }
      },
      "evidenceIds": [
        "ear_381382f1dc84345b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Bauheizer",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_cb58c9e2d8dda57d",
      "name": "拱形烛台装饰灯",
      "officialName": "Schwibbogen",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cb58c9e2d8dda57d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cb58c9e2d8dda57d"
          ]
        }
      },
      "evidenceIds": [
        "ear_cb58c9e2d8dda57d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Schwibbogen",
          "可更换光源需与完整产品分别核对"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c071f6ef44f2ab6b",
      "name": "水族、池塘及业余用途 UVC 灯",
      "officialName": "UVC-Lampe für Aquarien, Teiche, Hobby",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "gas",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c071f6ef44f2ab6b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c071f6ef44f2ab6b"
          ]
        }
      },
      "evidenceIds": [
        "ear_c071f6ef44f2ab6b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：UVC-Lampe für Aquarien, Teiche, Hobby",
          "独立光源，具有标准灯头；完整灯具不适用"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_eacca2098eb1dfea",
      "name": "模拟音视频转换器",
      "officialName": "Analog Audio- und Video-Konverter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eacca2098eb1dfea"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_eacca2098eb1dfea"
          ]
        }
      },
      "evidenceIds": [
        "ear_eacca2098eb1dfea"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Analog Audio- und Video-Konverter",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_19fb8daa71d68cb1",
      "name": "网银动态验证码器（TAN）",
      "officialName": "TAN-Generator",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_19fb8daa71d68cb1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_19fb8daa71d68cb1"
          ]
        }
      },
      "evidenceIds": [
        "ear_19fb8daa71d68cb1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：TAN-Generator",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_49290245ad3110be",
      "name": "带报警功能的方向盘锁",
      "officialName": "Lenkradkralle mit Alarm",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_49290245ad3110be"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_49290245ad3110be"
          ]
        }
      },
      "evidenceIds": [
        "ear_49290245ad3110be"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Lenkradkralle mit Alarm",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c7068dc01b553755",
      "name": "自动抛球机",
      "officialName": "Automatischer Ballwerfer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c7068dc01b553755"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c7068dc01b553755"
          ]
        }
      },
      "evidenceIds": [
        "ear_c7068dc01b553755"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Automatischer Ballwerfer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c64ed0f45886b84a",
      "name": "电子烟烟弹",
      "officialName": "Pod für Dampfer (E-Zigarette)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c64ed0f45886b84a"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c64ed0f45886b84a"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_42f2a7455ef5bb52",
      "name": "卫星多路开关",
      "officialName": "SAT-Multischalter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_42f2a7455ef5bb52"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_42f2a7455ef5bb52"
          ]
        }
      },
      "evidenceIds": [
        "ear_42f2a7455ef5bb52"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：SAT-Multischalter",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_9723c010d08f674d",
      "name": "电子烟雾化芯",
      "officialName": "Verdampferkopf (Coil für E-Zigarette)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9723c010d08f674d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9723c010d08f674d"
          ]
        }
      },
      "evidenceIds": [
        "ear_9723c010d08f674d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Verdampferkopf (Coil für E-Zigarette)",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ce57e7d3e868fa9d",
      "name": "电路板",
      "officialName": "Leiterplatte, Platine",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ce57e7d3e868fa9d"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ce57e7d3e868fa9d"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1cc4205a4d261479",
      "name": "带USB充电端口的背包",
      "officialName": "Rucksack mit USB Ladeanschluss",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "fixedElectrical",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1cc4205a4d261479"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1cc4205a4d261479"
          ]
        }
      },
      "evidenceIds": [
        "ear_1cc4205a4d261479"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Rucksack mit USB Ladeanschluss",
          "柔性设备按折叠或卷起后的最紧凑状态测量"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c22f61135c00fe2c",
      "name": "生物反馈训练器",
      "officialName": "Biofeedback Trainer",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c22f61135c00fe2c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c22f61135c00fe2c"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7a712128984781cd",
      "name": "多功能移动电源",
      "officialName": "Powerbank mit Zusatzfunktion",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7a712128984781cd"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_7a712128984781cd"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_66a4ef5104991746",
      "name": "驾驶式扫地机",
      "officialName": "Aufsitz-Kehrmaschine",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_66a4ef5104991746"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_66a4ef5104991746"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c79e1f24601630fa",
      "name": "全自动咖啡机",
      "officialName": "Kaffee-Vollautomat",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c79e1f24601630fa"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c79e1f24601630fa"
          ]
        }
      },
      "evidenceIds": [
        "ear_c79e1f24601630fa"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Kaffee-Vollautomat",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8963c5869c56db4b",
      "name": "红外线加热器",
      "officialName": "Infrarot Heizstrahler",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8963c5869c56db4b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8963c5869c56db4b"
          ]
        }
      },
      "evidenceIds": [
        "ear_8963c5869c56db4b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Infrarot Heizstrahler"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a68f2c543741dae7",
      "name": "刚性光伏组件（带玻璃）",
      "officialName": "starrres PV-Modul mit Glas",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "largePV",
            "household": "yes"
          },
          {
            "kind": "smallPV",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a68f2c543741dae7"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a68f2c543741dae7"
          ]
        }
      },
      "evidenceIds": [
        "ear_a68f2c543741dae7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：starrres PV-Modul mit Glas"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0975ce84098aed38",
      "name": "陶瓷加热灯",
      "officialName": "Keramik Wärmelampe",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0975ce84098aed38"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0975ce84098aed38"
          ]
        }
      },
      "evidenceIds": [
        "ear_0975ce84098aed38"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Keramik Wärmelampe",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3b08dcd443e632c5",
      "name": "单板电脑用 LCD 按键扩展板",
      "officialName": "Keypad-Shield mit LCD für Einplatinencomputer",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3b08dcd443e632c5"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_3b08dcd443e632c5"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_90f022b5af261ff6",
      "name": "北约规格应急启动电缆",
      "officialName": "Nato-Starthilfekabel",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_90f022b5af261ff6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_90f022b5af261ff6"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ac58d8d816413d58",
      "name": "激光数字经纬仪",
      "officialName": "Digitaler Theodolit mit Laser",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ac58d8d816413d58"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_ac58d8d816413d58"
          ]
        }
      },
      "evidenceIds": [
        "ear_ac58d8d816413d58"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Digitaler Theodolit mit Laser"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0bde48c9790995a2",
      "name": "家用壁挂式电动汽车充电桩",
      "officialName": "Wallbox, Heim-Ladestation",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0bde48c9790995a2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0bde48c9790995a2"
          ]
        }
      },
      "evidenceIds": [
        "ear_0bde48c9790995a2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Wallbox, Heim-Ladestation",
          "尺寸不计入可选的无电气功能支架",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_30f51b0195123ed6",
      "name": "静电防护接地设备（ESD）",
      "officialName": "Erdungsausrüstung (ESD-Ausrüstung)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_30f51b0195123ed6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_30f51b0195123ed6"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7e6a05093e7b4487",
      "name": "网线",
      "officialName": "LAN-Kabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7e6a05093e7b4487"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7e6a05093e7b4487"
          ]
        }
      },
      "evidenceIds": [
        "ear_7e6a05093e7b4487"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：LAN-Kabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_03460d199971efdb",
      "name": "大型信息与通信设备",
      "officialName": "großes IT- und Telekommunikationsgerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_03460d199971efdb"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_03460d199971efdb"
          ]
        }
      },
      "evidenceIds": [
        "ear_03460d199971efdb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：großes IT- und Telekommunikationsgerät",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_57f7f734f92d09a4",
      "name": "LED灯丝灯",
      "officialName": "LED-Filament-Lampe",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "lamp",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_57f7f734f92d09a4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_57f7f734f92d09a4"
          ]
        }
      },
      "evidenceIds": [
        "ear_57f7f734f92d09a4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：LED-Filament-Lampe",
          "独立光源，具有标准灯头；完整灯具不适用"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_97501041edeb5eff",
      "name": "二氧化氯水处理设备",
      "officialName": "Wasseraufbereitungsanlage (Chlordioxid)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_97501041edeb5eff"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_97501041edeb5eff"
          ]
        }
      },
      "evidenceIds": [
        "ear_97501041edeb5eff"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Wasseraufbereitungsanlage (Chlordioxid)"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_769dc0ebae22e4ab",
      "name": "感应式纸巾机",
      "officialName": "Sensor-Handtuchspender",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_769dc0ebae22e4ab"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_769dc0ebae22e4ab"
          ]
        }
      },
      "evidenceIds": [
        "ear_769dc0ebae22e4ab"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Sensor-Handtuchspender",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_fae1961c76448304",
      "name": "电动床板架",
      "officialName": "Lattenrost, elektrisch",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fae1961c76448304"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_fae1961c76448304"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0e1e272c101db27f",
      "name": "蓝牙钥匙防丢器（不含 GPS）",
      "officialName": "Bluetooth Schlüsselfinder ohne eigenes GPS",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0e1e272c101db27f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_0e1e272c101db27f"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d78de9a27231f5a4",
      "name": "发光滚轮（例如直排轮滑鞋、滑板）",
      "officialName": "Leuchtrolle (z.B. für Inliner, Skateboards)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d78de9a27231f5a4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d78de9a27231f5a4"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0e761536fbc5a632",
      "name": "蓝牙调频发射器（FM）",
      "officialName": "Bluetooth-Transmitter FM",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0e761536fbc5a632"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_0e761536fbc5a632"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b32cf4596044f79d",
      "name": "未装配或部分装配接头的电缆",
      "officialName": "Kabel, unkonfektioniert, teilkonfektioniert",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b32cf4596044f79d"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_b32cf4596044f79d"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_71e4619c38c2312f",
      "name": "LED 气泡装饰柱",
      "officialName": "Wassersprudelsäule mit LED-Beleuchtung",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_71e4619c38c2312f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_71e4619c38c2312f"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_6123411755123429",
      "name": "带芯片或传感器的墨水/碳粉盒",
      "officialName": "Tinten-/Tonerkartusche mit Chip oder Sensor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6123411755123429"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6123411755123429"
          ]
        }
      },
      "evidenceIds": [
        "ear_6123411755123429"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Tinten-/Tonerkartusche mit Chip oder Sensor",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8b4df85a07e71f5e",
      "name": "储水式电热水器",
      "officialName": "Boiler",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8b4df85a07e71f5e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8b4df85a07e71f5e"
          ]
        }
      },
      "evidenceIds": [
        "ear_8b4df85a07e71f5e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Boiler",
          "按普通完整设备处理，不属于大型固定设备的排除情形"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_837dd06f3ca39565",
      "name": "电器电源连接线",
      "officialName": "Kaltgerätekabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_837dd06f3ca39565"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_837dd06f3ca39565"
          ]
        }
      },
      "evidenceIds": [
        "ear_837dd06f3ca39565"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Kaltgerätekabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_f4a090e5870cf387",
      "name": "乐器（带电气功能）",
      "officialName": "Musikinstrument (mit elektr. Funktionen)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f4a090e5870cf387"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f4a090e5870cf387"
          ]
        }
      },
      "evidenceIds": [
        "ear_f4a090e5870cf387"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Musikinstrument (mit elektr. Funktionen)",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a7bf6136cc7f5c3d",
      "name": "验钞机",
      "officialName": "Geldscheinprüfer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a7bf6136cc7f5c3d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a7bf6136cc7f5c3d"
          ]
        }
      },
      "evidenceIds": [
        "ear_a7bf6136cc7f5c3d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Geldscheinprüfer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c9a31367ed7d5110",
      "name": "点钞机",
      "officialName": "Geldzählautomat",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c9a31367ed7d5110"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c9a31367ed7d5110"
          ]
        }
      },
      "evidenceIds": [
        "ear_c9a31367ed7d5110"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Geldzählautomat",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_90ff74a96bf29371",
      "name": "主动降噪听力保护设备",
      "officialName": "aktiver Gehörschutz",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_90ff74a96bf29371"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_90ff74a96bf29371"
          ]
        }
      },
      "evidenceIds": [
        "ear_90ff74a96bf29371"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：aktiver Gehörschutz",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0924936eaaf3d40e",
      "name": "电子烟烟弹系统主机",
      "officialName": "Basisgerät für Pod-System",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0924936eaaf3d40e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0924936eaaf3d40e"
          ]
        }
      },
      "evidenceIds": [
        "ear_0924936eaaf3d40e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Basisgerät für Pod-System",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1e85ee23e4e74400",
      "name": "卷式录音磁带",
      "officialName": "Tonband",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1e85ee23e4e74400"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_1e85ee23e4e74400"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c601e2d0317ff52b",
      "name": "3D快门眼镜",
      "officialName": "3D Shutterbrille",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c601e2d0317ff52b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c601e2d0317ff52b"
          ]
        }
      },
      "evidenceIds": [
        "ear_c601e2d0317ff52b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：3D Shutterbrille",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_142050f3b69ad839",
      "name": "电子助视器",
      "officialName": "Elektronische Lesehilfe",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_142050f3b69ad839"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_142050f3b69ad839"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_825b89d4a7ace07c",
      "name": "检测摄像机",
      "officialName": "Inspektionskamera",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_825b89d4a7ace07c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_825b89d4a7ace07c"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ca959537dadd9889",
      "name": "奶瓶蒸汽消毒器",
      "officialName": "Vaporisator",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ca959537dadd9889"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ca959537dadd9889"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e1b2b61771aeb3f2",
      "name": "摩托车轮胎加热器",
      "officialName": "Reifenwärmer für Motorräder",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e1b2b61771aeb3f2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e1b2b61771aeb3f2"
          ]
        }
      },
      "evidenceIds": [
        "ear_e1b2b61771aeb3f2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Reifenwärmer für Motorräder",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_75a011c91636e78d",
      "name": "制冰机",
      "officialName": "Eiswürfelmaschine",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "refrigerant"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_75a011c91636e78d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_75a011c91636e78d"
          ]
        }
      },
      "evidenceIds": [
        "ear_75a011c91636e78d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Eiswürfelmaschine"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_dd056eb9739fe3e9",
      "name": "网络测试仪",
      "officialName": "Netzwerktester",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dd056eb9739fe3e9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dd056eb9739fe3e9"
          ]
        }
      },
      "evidenceIds": [
        "ear_dd056eb9739fe3e9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Netzwerktester",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_15dbc7bb217c6821",
      "name": "车库门驱动装置",
      "officialName": "Garagentorantrieb",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_15dbc7bb217c6821"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_15dbc7bb217c6821"
          ]
        }
      },
      "evidenceIds": [
        "ear_15dbc7bb217c6821"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Garagentorantrieb",
          "按独立完整设备处理，非其他设备的单独部件",
          "车库门驱动装置条目附有欧盟法院判决依据"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_5ee3c1c9e393ec0b",
      "name": "带发光轮的滑板车（无电机）",
      "officialName": "Tretroller mit Leuchtrollen (ohne Motor)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5ee3c1c9e393ec0b"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_5ee3c1c9e393ec0b"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_011c2a422d7b23b7",
      "name": "热饮保温及煮制设备",
      "officialName": "Heißgetränke- & Einkochautomat",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_011c2a422d7b23b7"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_011c2a422d7b23b7"
          ]
        }
      },
      "evidenceIds": [
        "ear_011c2a422d7b23b7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Heißgetränke- & Einkochautomat",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4c23a8ec09ab7eb9",
      "name": "冰淇淋机",
      "officialName": "Speiseeisbereiter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "refrigerant"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4c23a8ec09ab7eb9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4c23a8ec09ab7eb9"
          ]
        }
      },
      "evidenceIds": [
        "ear_4c23a8ec09ab7eb9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Speiseeisbereiter"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c6866432b8b445c6",
      "name": "厨房炉灶电源接线盒",
      "officialName": "Küchenanschlussbox",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c6866432b8b445c6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c6866432b8b445c6"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ed4f19973569078f",
      "name": "半导体除湿机",
      "officialName": "Peltier-Entfeuchter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "noRefrigerant",
          "size",
          "plainPeltier"
        ],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ed4f19973569078f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ed4f19973569078f"
          ]
        }
      },
      "evidenceIds": [
        "ear_ed4f19973569078f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Peltier-Entfeuchter"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {
          "noRefrigerant": {
            "title": "是否为无制冷剂、无压缩机的半导体除湿机？",
            "detail": "请核对说明书中的除湿原理和结构。",
            "yes": "是，符合上述结构",
            "no": "否，结构不符合"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_90f9a4246bab0db1",
      "name": "虫咬止痒器",
      "officialName": "Insektenstichheiler",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_90f9a4246bab0db1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_90f9a4246bab0db1"
          ]
        }
      },
      "evidenceIds": [
        "ear_90f9a4246bab0db1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Insektenstichheiler",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c3a2be497afc59c4",
      "name": "电池管理系统（BMS）",
      "officialName": "Batteriemanagementsystem (BMS)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c3a2be497afc59c4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c3a2be497afc59c4"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_cee82169d5ce61d9",
      "name": "幼儿电动玩具车",
      "officialName": "Kleinkinderfahrzeug",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cee82169d5ce61d9"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_cee82169d5ce61d9"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_420e28997ab10f43",
      "name": "带电子功能的打印机墨盒（如芯片）",
      "officialName": "Druckerpatrone mit elektrischer Funktion (z.B. Chip)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_420e28997ab10f43"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_420e28997ab10f43"
          ]
        }
      },
      "evidenceIds": [
        "ear_420e28997ab10f43"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Druckerpatrone mit elektrischer Funktion (z.B. Chip)",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a4e44d57f9227925",
      "name": "水处理设备",
      "officialName": "Wasseraufbereitungsanlage",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a4e44d57f9227925"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a4e44d57f9227925"
          ]
        }
      },
      "evidenceIds": [
        "ear_a4e44d57f9227925"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Wasseraufbereitungsanlage",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_9d41e667686a6fe1",
      "name": "避雷针",
      "officialName": "Blitzableiter",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9d41e667686a6fe1"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_9d41e667686a6fe1"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_dc9baa6e1cbf43fd",
      "name": "电话连接线",
      "officialName": "Telefonanschlusskabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dc9baa6e1cbf43fd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dc9baa6e1cbf43fd"
          ]
        }
      },
      "evidenceIds": [
        "ear_dc9baa6e1cbf43fd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Telefonanschlusskabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_87b834238b44493f",
      "name": "网线",
      "officialName": "Netzwerkkabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_87b834238b44493f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_87b834238b44493f"
          ]
        }
      },
      "evidenceIds": [
        "ear_87b834238b44493f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Netzwerkkabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d2b2b59b7bb52d2e",
      "name": "电炉和电烤箱",
      "officialName": "Elektroherd und Elektrobackofen",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d2b2b59b7bb52d2e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d2b2b59b7bb52d2e"
          ]
        }
      },
      "evidenceIds": [
        "ear_d2b2b59b7bb52d2e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Elektroherd und Elektrobackofen",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_f81f5edd5dc36332",
      "name": "带冷藏或冷冻功能的家用设备",
      "officialName": "(Haushalts-) Geräte mit Kühl-/Gefrierfunktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "refrigerant"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f81f5edd5dc36332"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f81f5edd5dc36332"
          ]
        }
      },
      "evidenceIds": [
        "ear_f81f5edd5dc36332"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：(Haushalts-) Geräte mit Kühl-/Gefrierfunktion"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_eb7f1029e9e38c27",
      "name": "充油散热器",
      "officialName": "ölgefüllter Radiator",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eb7f1029e9e38c27"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_eb7f1029e9e38c27"
          ]
        }
      },
      "evidenceIds": [
        "ear_eb7f1029e9e38c27"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：ölgefüllter Radiator"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d3277811cca1820c",
      "name": "无制冷功能的自动售货机",
      "officialName": "Produktausgabeautomat ohne Kühlfunktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d3277811cca1820c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_d3277811cca1820c"
          ]
        }
      },
      "evidenceIds": [
        "ear_d3277811cca1820c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Produktausgabeautomat ohne Kühlfunktion"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_fb4fc57d5f4fa49b",
      "name": "固定内置 NFC 或 RFID 芯片的产品",
      "officialName": "Produkt mit fest integriertem NFC- oder RFID-Chip",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fb4fc57d5f4fa49b"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_fb4fc57d5f4fa49b"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_f49732020b851ead",
      "name": "电子停车盘",
      "officialName": "Elektronische Parkscheibe",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f49732020b851ead"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f49732020b851ead"
          ]
        }
      },
      "evidenceIds": [
        "ear_f49732020b851ead"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Elektronische Parkscheibe",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_466d5d3f6c4abfc0",
      "name": "带发声功能的泰迪熊",
      "officialName": "Teddybär mit Brummstimme",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_466d5d3f6c4abfc0"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_466d5d3f6c4abfc0"
          ]
        }
      },
      "evidenceIds": [
        "ear_466d5d3f6c4abfc0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Teddybär mit Brummstimme"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7ffc122c173872ae",
      "name": "信息与通信接口转换器（如 USB、DisplayPort 转接器）",
      "officialName": "ITK-Adapter, z.B. USB auf Micro-USB, Displayport auf DVI",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7ffc122c173872ae"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7ffc122c173872ae"
          ]
        }
      },
      "evidenceIds": [
        "ear_7ffc122c173872ae"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：ITK-Adapter, z.B. USB auf Micro-USB, Displayport auf DVI",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_78b7e93f6e500509",
      "name": "换挡提示灯",
      "officialName": "Schaltblitz",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_78b7e93f6e500509"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_78b7e93f6e500509"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3bb070e0a6fb6a77",
      "name": "DIN导轨装置",
      "officialName": "Hutschienengerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size",
          "ict"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "no"
          },
          {
            "kind": "ict",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3bb070e0a6fb6a77"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3bb070e0a6fb6a77"
          ]
        }
      },
      "evidenceIds": [
        "ear_3bb070e0a6fb6a77"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Hutschienengerät",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_bdfdfdf528b1e178",
      "name": "大型视频显示屏",
      "officialName": "Videogroßdisplay",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bdfdfdf528b1e178"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_bdfdfdf528b1e178"
          ]
        }
      },
      "evidenceIds": [
        "ear_bdfdfdf528b1e178"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Videogroßdisplay"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7ce99d665b17effd",
      "name": "单板电脑用迷你 MP3 播放器",
      "officialName": "Mini Mp3-Spieler für Einplatinencomputer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7ce99d665b17effd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7ce99d665b17effd"
          ]
        }
      },
      "evidenceIds": [
        "ear_7ce99d665b17effd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Mini Mp3-Spieler für Einplatinencomputer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c59dcd3f173c22e2",
      "name": "带制冷功能的自动售货机",
      "officialName": "Produktausgabeautomat mit Kühlfunktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "refrigerant"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c59dcd3f173c22e2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_c59dcd3f173c22e2"
          ]
        }
      },
      "evidenceIds": [
        "ear_c59dcd3f173c22e2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Produktausgabeautomat mit Kühlfunktion"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e55f96583622c441",
      "name": "儿童摩托车",
      "officialName": "Kinder-Motorrad",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e55f96583622c441"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e55f96583622c441"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_cf816c824a85b9a0",
      "name": "汽车改装装置",
      "officialName": "Tuninggerät Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "displayArea",
          "size"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cf816c824a85b9a0"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cf816c824a85b9a0"
          ]
        }
      },
      "evidenceIds": [
        "ear_cf816c824a85b9a0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Tuninggerät Kfz"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_94e744e5ac9da7a4",
      "name": "磁卡（无芯片）",
      "officialName": "Magnetkarte (ohne Chip)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_94e744e5ac9da7a4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_94e744e5ac9da7a4"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d0f280dd7a0a046c",
      "name": "楼梯升降椅",
      "officialName": "Treppenlift",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d0f280dd7a0a046c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d0f280dd7a0a046c"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_466582ac6f796c84",
      "name": "带灯放大镜",
      "officialName": "Lupenleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_466582ac6f796c84"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_466582ac6f796c84"
          ]
        }
      },
      "evidenceIds": [
        "ear_466582ac6f796c84"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Lupenleuchte",
          "带固定 LED 照明的放大镜",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4fba10d870090bae",
      "name": "定时开关",
      "officialName": "Zeitschaltuhr",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4fba10d870090bae"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4fba10d870090bae"
          ]
        }
      },
      "evidenceIds": [
        "ear_4fba10d870090bae"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Zeitschaltuhr",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e5d96bf05dbe71c4",
      "name": "车辆法定必备照明设备",
      "officialName": "vorgeschriebene Beleuchtung für Kfz",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e5d96bf05dbe71c4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e5d96bf05dbe71c4"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_2a57f3a4e9c01342",
      "name": "冷热水供应设备（无制冷功能）",
      "officialName": "Heiß-/Kaltwasserbereiter ohne Kühlfunktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2a57f3a4e9c01342"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2a57f3a4e9c01342"
          ]
        }
      },
      "evidenceIds": [
        "ear_2a57f3a4e9c01342"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Heiß-/Kaltwasserbereiter ohne Kühlfunktion",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_98bbec8acb2471e7",
      "name": "顶装式电动升降装置",
      "officialName": "Deckenlift, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_98bbec8acb2471e7"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_98bbec8acb2471e7"
          ]
        }
      },
      "evidenceIds": [
        "ear_98bbec8acb2471e7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Deckenlift, elektrisch",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4b1c27143307ffce",
      "name": "卫星天线（不带 LNB）",
      "officialName": "Satellitenschüssel (ohne LNB)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4b1c27143307ffce"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_4b1c27143307ffce"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c8d84347032fb3c9",
      "name": "户外导航通信终端",
      "officialName": "Globalfinder",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c8d84347032fb3c9"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c8d84347032fb3c9"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3cf021c8417481b8",
      "name": "冷热水供应设备",
      "officialName": "Heiß-/Kaltwasserbereiter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "refrigerant"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3cf021c8417481b8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3cf021c8417481b8"
          ]
        }
      },
      "evidenceIds": [
        "ear_3cf021c8417481b8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Heiß-/Kaltwasserbereiter"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a2d470432f149c1d",
      "name": "电动皂液器",
      "officialName": "Seifenspender, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a2d470432f149c1d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a2d470432f149c1d"
          ]
        }
      },
      "evidenceIds": [
        "ear_a2d470432f149c1d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Seifenspender, elektrisch",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_21fbb92bb3158ab9",
      "name": "卫星分配器",
      "officialName": "Satelliten-Verteiler",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_21fbb92bb3158ab9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_21fbb92bb3158ab9"
          ]
        }
      },
      "evidenceIds": [
        "ear_21fbb92bb3158ab9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Satelliten-Verteiler",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8a750293e8bd09a2",
      "name": "电烤炉点火器",
      "officialName": "Elektrischer Grillanzünder",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8a750293e8bd09a2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8a750293e8bd09a2"
          ]
        }
      },
      "evidenceIds": [
        "ear_8a750293e8bd09a2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Elektrischer Grillanzünder",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_522c104347a79394",
      "name": "射频识别芯片",
      "officialName": "RFID-Chip",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_522c104347a79394"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_522c104347a79394"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_efdaa87a38e68db0",
      "name": "电蚊蝇拍",
      "officialName": "elektrische Fliegenklatsche",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_efdaa87a38e68db0"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_efdaa87a38e68db0"
          ]
        }
      },
      "evidenceIds": [
        "ear_efdaa87a38e68db0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：elektrische Fliegenklatsche"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_125b7fa55577ec76",
      "name": "带电气功能的炉具",
      "officialName": "Ofen mit elektrischer Funktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_125b7fa55577ec76"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_125b7fa55577ec76"
          ]
        }
      },
      "evidenceIds": [
        "ear_125b7fa55577ec76"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Ofen mit elektrischer Funktion",
          "按普通完整设备处理，不属于大型固定设备的排除情形",
          "按普通完整设备处理，不属于大型固定设备的排除情形",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e556e088e8bfbe99",
      "name": "空中鼠标遥控器",
      "officialName": "Airmaus Fernbedienung",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e556e088e8bfbe99"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e556e088e8bfbe99"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_950c02ce3ce46264",
      "name": "交互式自助终端",
      "officialName": "interaktiver Kiosk",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_950c02ce3ce46264"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_950c02ce3ce46264"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a7800085b35d5ab9",
      "name": "原声乐器拾音器",
      "officialName": "Tonabnehmer für akustische Instrumente",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a7800085b35d5ab9"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_a7800085b35d5ab9"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_120c0beb57a1669b",
      "name": "电动遮阳棚",
      "officialName": "Markise, elektrisch",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_120c0beb57a1669b"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_120c0beb57a1669b"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0b4152db02389b07",
      "name": "电子价签",
      "officialName": "Digitales Preisschild",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0b4152db02389b07"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_0b4152db02389b07"
          ]
        }
      },
      "evidenceIds": [
        "ear_0b4152db02389b07"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Digitales Preisschild",
          "该类独立显示设备不受屏幕尺寸限制"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3643fe494607026a",
      "name": "实验室及工业循环冷却器",
      "officialName": "Umwälz-/Umlaufkühler für Labore und Industrie",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3643fe494607026a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_3643fe494607026a"
          ]
        }
      },
      "evidenceIds": [
        "ear_3643fe494607026a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Umwälz-/Umlaufkühler für Labore und Industrie"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b7fa6c17b71d9c73",
      "name": "电子制作控制模块",
      "officialName": "Steuerungsmodule für Bastler",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b7fa6c17b71d9c73"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_b7fa6c17b71d9c73"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0e38f5b9ead262fd",
      "name": "带 USB 的欧规电源线",
      "officialName": "Eurokabel mit USB",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0e38f5b9ead262fd"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_0e38f5b9ead262fd"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_016e8c072a3d1d88",
      "name": "电动汽车充电站",
      "officialName": "Ladesäule für Elektromobilität",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_016e8c072a3d1d88"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_016e8c072a3d1d88"
          ]
        }
      },
      "evidenceIds": [
        "ear_016e8c072a3d1d88"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Ladesäule für Elektromobilität",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3f210b6c7e8acba2",
      "name": "LED滑板（不带电机）",
      "officialName": "LED-Skateboard (ohne Motor)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3f210b6c7e8acba2"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_3f210b6c7e8acba2"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b244919f308c100f",
      "name": "望远镜手持控制器",
      "officialName": "Handsteuerung für Teleskope",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b244919f308c100f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b244919f308c100f"
          ]
        }
      },
      "evidenceIds": [
        "ear_b244919f308c100f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Handsteuerung für Teleskope",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_476aecb399686673",
      "name": "车辆附加仪表（车速表除外）",
      "officialName": "Zusatzinstrumente (außer Tachos) für Kfz",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_476aecb399686673"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_476aecb399686673"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d6fb8d6d572715ee",
      "name": "门/窗接触开关",
      "officialName": "Kontaktschalter für Türen/Fenster",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d6fb8d6d572715ee"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d6fb8d6d572715ee"
          ]
        }
      },
      "evidenceIds": [
        "ear_d6fb8d6d572715ee"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Kontaktschalter für Türen/Fenster",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d967a9126a993f18",
      "name": "电动开门器",
      "officialName": "Türöffner, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d967a9126a993f18"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d967a9126a993f18"
          ]
        }
      },
      "evidenceIds": [
        "ear_d967a9126a993f18"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Türöffner, elektrisch",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c16ebdfed413df96",
      "name": "电动高尔夫球包车",
      "officialName": "Golftrolley, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c16ebdfed413df96"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c16ebdfed413df96"
          ]
        }
      },
      "evidenceIds": [
        "ear_c16ebdfed413df96"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Golftrolley, elektrisch",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c8bb3b5eb4cec0b3",
      "name": "OBD诊断装置",
      "officialName": "OBD-Diagnosegerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "displayArea",
          "size"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "no"
          },
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c8bb3b5eb4cec0b3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c8bb3b5eb4cec0b3"
          ]
        }
      },
      "evidenceIds": [
        "ear_c8bb3b5eb4cec0b3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：OBD-Diagnosegerät",
          "纯触屏诊断设备按屏幕面积及用途分支判断"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {
          "displayArea": {
            "title": "是否为纯触摸屏操作，且屏幕面积大于 100 cm²？",
            "detail": "请同时确认操作方式和屏幕面积；不符合时，继续确认产品尺寸。",
            "yes": "是，纯触屏且面积大于 100 cm²",
            "no": "否，不符合上述条件"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_195733dcb954c843",
      "name": "天文望远镜支架",
      "officialName": "Montierung für Teleskop",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_195733dcb954c843"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_195733dcb954c843"
          ]
        }
      },
      "evidenceIds": [
        "ear_195733dcb954c843"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Montierung für Teleskop"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_29ffa0eac1a0a79c",
      "name": "个人电脑（PC）",
      "officialName": "PC (Personal Computer)",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ict",
        "required": [
          "size"
        ]
      },
      "facts": {
        "referenceShape": {
          "value": "这是用于信息处理的独立 PC 主机，而非空机箱、单独配件或一体式电脑。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_29ffa0eac1a0a79c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_29ffa0eac1a0a79c"
          ]
        }
      },
      "evidenceIds": [
        "ear_29ffa0eac1a0a79c"
      ],
      "presentation": {
        "defaultsText": [
          "这是用于信息处理的独立 PC 主机，而非空机箱、单独配件或一体式电脑。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1f20d639856de86b",
      "name": "电烤奶酪炉与火锅一体机",
      "officialName": "Raclette-Fondue-Kombination",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1f20d639856de86b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1f20d639856de86b"
          ]
        }
      },
      "evidenceIds": [
        "ear_1f20d639856de86b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Raclette-Fondue-Kombination",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_2d00d5701bda9895",
      "name": "通信或信息设备专用麦克风",
      "officialName": "Mikrofon, ausschließlich für Kommunikations- oder IT-Zwecke",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2d00d5701bda9895"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2d00d5701bda9895"
          ]
        }
      },
      "evidenceIds": [
        "ear_2d00d5701bda9895"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Mikrofon, ausschließlich für Kommunikations- oder IT-Zwecke",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1933e9ad99aafdd8",
      "name": "燃气烧烤炉 LED 旋钮",
      "officialName": "LED-Drehknopf für Gasgrill",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1933e9ad99aafdd8"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_1933e9ad99aafdd8"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e1d2d4b9ce0a646f",
      "name": "医院、疗养院的呼叫按钮",
      "officialName": "Ruftaster für Krankenhaus, Pflegeheime",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e1d2d4b9ce0a646f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_e1d2d4b9ce0a646f"
          ]
        }
      },
      "evidenceIds": [
        "ear_e1d2d4b9ce0a646f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Ruftaster für Krankenhaus, Pflegeheime",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_59d51ebad6227cfa",
      "name": "带电气功能的瞄准镜",
      "officialName": "Zielfernrohr mit elektrischer Funktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_59d51ebad6227cfa"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_59d51ebad6227cfa"
          ]
        }
      },
      "evidenceIds": [
        "ear_59d51ebad6227cfa"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Zielfernrohr mit elektrischer Funktion",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3bb94ca741793a4c",
      "name": "大型电动机",
      "officialName": "großer Elektromotor",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3bb94ca741793a4c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_3bb94ca741793a4c"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3ff8e27ab4e8084f",
      "name": "通信天线",
      "officialName": "Kommunikationsantenne",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3ff8e27ab4e8084f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_3ff8e27ab4e8084f"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_88291fd9703952ce",
      "name": "地板抛光机",
      "officialName": "Bodenpoliermaschine",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_88291fd9703952ce"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_88291fd9703952ce"
          ]
        }
      },
      "evidenceIds": [
        "ear_88291fd9703952ce"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Bodenpoliermaschine",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c307ca76abd552bb",
      "name": "视频编码器",
      "officialName": "Videoencoder",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c307ca76abd552bb"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c307ca76abd552bb"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3fe35664d196c7cf",
      "name": "服务机器人",
      "officialName": "Serviceroboter",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3fe35664d196c7cf"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_3fe35664d196c7cf"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_f6e741311ab22c06",
      "name": "笔记本电脑 USB 散热风扇",
      "officialName": "USB-Lüfter für Laptop",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f6e741311ab22c06"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_f6e741311ab22c06"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_51b9c852bc9d5303",
      "name": "开发板",
      "officialName": "Entwicklerboard",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          },
          {
            "kind": "ict",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_51b9c852bc9d5303"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_51b9c852bc9d5303"
          ]
        }
      },
      "evidenceIds": [
        "ear_51b9c852bc9d5303"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Entwicklerboard",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0e0ff409c3a35006",
      "name": "带灯光的玩具屋",
      "officialName": "Spielzeughaus mit Beleuchtung",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "fixedElectrical",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0e0ff409c3a35006"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0e0ff409c3a35006"
          ]
        }
      },
      "evidenceIds": [
        "ear_0e0ff409c3a35006"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Spielzeughaus mit Beleuchtung",
          "供制作或园艺等普通用途的完整产品"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_9ab0b87f3d5dc491",
      "name": "血糖仪",
      "officialName": "Blutzuckermessgerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9ab0b87f3d5dc491"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9ab0b87f3d5dc491"
          ]
        }
      },
      "evidenceIds": [
        "ear_9ab0b87f3d5dc491"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Blutzuckermessgerät",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_c4b2e3dc635e5dba",
      "name": "抽油烟机",
      "officialName": "Dunstabzugshaube",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c4b2e3dc635e5dba"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c4b2e3dc635e5dba"
          ]
        }
      },
      "evidenceIds": [
        "ear_c4b2e3dc635e5dba"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Dunstabzugshaube",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_706bd433b21f8ef1",
      "name": "单板计算机",
      "officialName": "Einplatinencomputer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_706bd433b21f8ef1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_706bd433b21f8ef1"
          ]
        }
      },
      "evidenceIds": [
        "ear_706bd433b21f8ef1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Einplatinencomputer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b3e07006d4d63861",
      "name": "洞洞板（通孔实验电路板）",
      "officialName": "Lochrasterplatine",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b3e07006d4d63861"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_b3e07006d4d63861"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a2f74e06b0661e8f",
      "name": "电动代步车",
      "officialName": "Elektromobil",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a2f74e06b0661e8f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_a2f74e06b0661e8f"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7b26d91b37930f23",
      "name": "手机",
      "officialName": "Mobiltelefon",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7b26d91b37930f23"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7b26d91b37930f23"
          ]
        }
      },
      "evidenceIds": [
        "ear_7b26d91b37930f23"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Mobiltelefon",
          "手机按信息通信设备处理，不按屏幕设备处理",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_04dda9bae228fe4f",
      "name": "玩具机器人",
      "officialName": "Spielzeugroboter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes",
          "size": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 将玩具机器人列为可用于私人家庭的小型设备。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_04dda9bae228fe4f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_04dda9bae228fe4f"
          ]
        },
        "size": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_04dda9bae228fe4f"
          ]
        }
      },
      "evidenceIds": [
        "ear_04dda9bae228fe4f"
      ],
      "presentation": {
        "defaultsText": [
          "可用于私人家庭",
          "完整电动玩具，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_59571aeae828f344",
      "name": "紧凑型荧光灯",
      "officialName": "Kompaktleuchtstofflampe",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "gas",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_59571aeae828f344"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_59571aeae828f344"
          ]
        }
      },
      "evidenceIds": [
        "ear_59571aeae828f344"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Kompaktleuchtstofflampe",
          "独立光源，具有标准灯头；完整灯具不适用"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_fca364b3907ba690",
      "name": "不间断电源（UPS）",
      "officialName": "Unterbrechungsfreie Stromversorgung (USV)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fca364b3907ba690"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fca364b3907ba690"
          ]
        }
      },
      "evidenceIds": [
        "ear_fca364b3907ba690"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Unterbrechungsfreie Stromversorgung (USV)",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_2c0516a53045cedb",
      "name": "USB 扩展坞",
      "officialName": "USB-Docking station",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2c0516a53045cedb"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2c0516a53045cedb"
          ]
        }
      },
      "evidenceIds": [
        "ear_2c0516a53045cedb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：USB-Docking station",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_60986ff8c0d2c5be",
      "name": "无制冷功能的压缩机",
      "officialName": "Kompressor ohne Kühlfunktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_60986ff8c0d2c5be"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_60986ff8c0d2c5be"
          ]
        }
      },
      "evidenceIds": [
        "ear_60986ff8c0d2c5be"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Kompressor ohne Kühlfunktion",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d42bf2cf650d5cf1",
      "name": "除湿机",
      "officialName": "Entfeuchter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "refrigerant"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d42bf2cf650d5cf1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d42bf2cf650d5cf1"
          ]
        }
      },
      "evidenceIds": [
        "ear_d42bf2cf650d5cf1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Entfeuchter"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_097bf8fd924985ec",
      "name": "不间断电源",
      "officialName": "Unterbrechungsfreie Stromversorgung",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_097bf8fd924985ec"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_097bf8fd924985ec"
          ]
        }
      },
      "evidenceIds": [
        "ear_097bf8fd924985ec"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Unterbrechungsfreie Stromversorgung",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_92d52cd7072e4db4",
      "name": "插座式电涌保护器",
      "officialName": "Überspannungsschutz für Steckdose",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_92d52cd7072e4db4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_92d52cd7072e4db4"
          ]
        }
      },
      "evidenceIds": [
        "ear_92d52cd7072e4db4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Überspannungsschutz für Steckdose",
          "用于保护家用音响、电脑等设备",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a1473860a9ac12ce",
      "name": "电脑鼠标",
      "officialName": "PC-Maus",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a1473860a9ac12ce"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a1473860a9ac12ce"
          ]
        }
      },
      "evidenceIds": [
        "ear_a1473860a9ac12ce"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：PC-Maus",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_fbb165fde4696713",
      "name": "电熔焊接套筒",
      "officialName": "Elektroschweißmuffe",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fbb165fde4696713"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_fbb165fde4696713"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_34d719879f1d19b6",
      "name": "自动充气气垫床",
      "officialName": "Luftbett, selbstaufblasend",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "mattress",
        "required": []
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_34d719879f1d19b6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_34d719879f1d19b6"
          ]
        }
      },
      "evidenceIds": [
        "ear_34d719879f1d19b6"
      ],
      "presentation": {
        "defaultsText": [
          "普通完整充气气垫，可用于私人家庭",
          "柔性设备按折叠或卷起后的最紧凑状态测量"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e2fd2a811ee44fa9",
      "name": "建筑除湿干燥机",
      "officialName": "Bautrockner mit Entfeuchtung",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e2fd2a811ee44fa9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e2fd2a811ee44fa9"
          ]
        }
      },
      "evidenceIds": [
        "ear_e2fd2a811ee44fa9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Bautrockner mit Entfeuchtung"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7752463eacb16dd8",
      "name": "带 USB 充电接口的充电电池",
      "officialName": "USB-Akku",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7752463eacb16dd8"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_7752463eacb16dd8"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1f6cc0dc0080c519",
      "name": "挂钟",
      "officialName": "Uhr, Wanduhr",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1f6cc0dc0080c519"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1f6cc0dc0080c519"
          ]
        }
      },
      "evidenceIds": [
        "ear_1f6cc0dc0080c519"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Uhr, Wanduhr",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4f81f256f3e6f6ce",
      "name": "腕表",
      "officialName": "Uhr, Armbanduhr",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": true
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4f81f256f3e6f6ce"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4f81f256f3e6f6ce"
          ]
        }
      },
      "evidenceIds": [
        "ear_4f81f256f3e6f6ce"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Uhr, Armbanduhr",
          "普通小型腕表（含石英表、智能手表、健身追踪器）按第5类处理；SIM卡或Wi-Fi功能不改变此条目的分类",
          "按普通可穿戴腕表条目归小型设备，不使用挂钟的大小分支"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_de249fe9e291f839",
      "name": "带灯光功能的鞋",
      "officialName": "Schuh mit Leuchtfunktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_de249fe9e291f839"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_de249fe9e291f839"
          ]
        }
      },
      "evidenceIds": [
        "ear_de249fe9e291f839"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Schuh mit Leuchtfunktion",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_099e4d9fc72a6d32",
      "name": "宠物饮水器",
      "officialName": "Trinkbrunnen für Haustiere",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_099e4d9fc72a6d32"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_099e4d9fc72a6d32"
          ]
        }
      },
      "evidenceIds": [
        "ear_099e4d9fc72a6d32"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Trinkbrunnen für Haustiere",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_24ba85b308016177",
      "name": "带制冷功能的工业压缩机",
      "officialName": "Industriekompressor mit Kühlfunktion",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_24ba85b308016177"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_24ba85b308016177"
          ]
        }
      },
      "evidenceIds": [
        "ear_24ba85b308016177"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Industriekompressor mit Kühlfunktion"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_cbda7c32e9bfa89e",
      "name": "相机闪光灯",
      "officialName": "Blitzgerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cbda7c32e9bfa89e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cbda7c32e9bfa89e"
          ]
        }
      },
      "evidenceIds": [
        "ear_cbda7c32e9bfa89e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Blitzgerät",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e628938defaf5e1b",
      "name": "USB插座",
      "officialName": "USB-Steckdose",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e628938defaf5e1b"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e628938defaf5e1b"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_6694d90acf312f84",
      "name": "钠蒸气灯",
      "officialName": "Natriumdampflampe",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "gas",
            "household": "yes"
          },
          {
            "kind": "lamp",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6694d90acf312f84"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6694d90acf312f84"
          ]
        }
      },
      "evidenceIds": [
        "ear_6694d90acf312f84"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Natriumdampflampe",
          "独立光源，具有标准灯头；完整灯具不适用"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e77fe6b62cb6ded5",
      "name": "激光打印机用感光鼓单元",
      "officialName": "Trommeleinheit für Laserdrucker",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e77fe6b62cb6ded5"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e77fe6b62cb6ded5"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3946f9821238df98",
      "name": "USB延长线",
      "officialName": "USB-Verlängerungskabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3946f9821238df98"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3946f9821238df98"
          ]
        }
      },
      "evidenceIds": [
        "ear_3946f9821238df98"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：USB-Verlängerungskabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_59e71a1c39631918",
      "name": "跑步运动记录器",
      "officialName": "Laufcomputer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_59e71a1c39631918"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_59e71a1c39631918"
          ]
        }
      },
      "evidenceIds": [
        "ear_59e71a1c39631918"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Laufcomputer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_dc598ca2ce888019",
      "name": "滚筒式烘干机（不带热泵）",
      "officialName": "Wäschetrockner (ohne Wärmepumpe)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dc598ca2ce888019"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dc598ca2ce888019"
          ]
        }
      },
      "evidenceIds": [
        "ear_dc598ca2ce888019"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Wäschetrockner (ohne Wärmepumpe)",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_82072d6c832927dd",
      "name": "冷却装置",
      "officialName": "Kühlgerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "refrigerant"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "thermal",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_82072d6c832927dd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_82072d6c832927dd"
          ]
        }
      },
      "evidenceIds": [
        "ear_82072d6c832927dd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Kühlgerät"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_f445b4e4e6b1a123",
      "name": "胶枪",
      "officialName": "Klebepistole",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f445b4e4e6b1a123"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f445b4e4e6b1a123"
          ]
        }
      },
      "evidenceIds": [
        "ear_f445b4e4e6b1a123"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Klebepistole",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_9f39ecaa4022f32f",
      "name": "测量仪器",
      "officialName": "Messgerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9f39ecaa4022f32f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9f39ecaa4022f32f"
          ]
        }
      },
      "evidenceIds": [
        "ear_9f39ecaa4022f32f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Messgerät",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_2d4855e48ac0257f",
      "name": "集成电气功能的小家具",
      "officialName": "Kleinmöbel mit integrierter elektrischer Funktion",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2d4855e48ac0257f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_2d4855e48ac0257f"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_dc216542ed0984e1",
      "name": "带灯光的装饰画",
      "officialName": "beleuchtetes Bild",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dc216542ed0984e1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dc216542ed0984e1"
          ]
        }
      },
      "evidenceIds": [
        "ear_dc216542ed0984e1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：beleuchtetes Bild",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1da6d79fd1d160f1",
      "name": "吉他调音器",
      "officialName": "Gitarrenstimmer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1da6d79fd1d160f1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1da6d79fd1d160f1"
          ]
        }
      },
      "evidenceIds": [
        "ear_1da6d79fd1d160f1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Gitarrenstimmer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_9566eeaf0a6a3486",
      "name": "带灯镜",
      "officialName": "beleuchteter Spiegel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9566eeaf0a6a3486"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9566eeaf0a6a3486"
          ]
        }
      },
      "evidenceIds": [
        "ear_9566eeaf0a6a3486"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：beleuchteter Spiegel"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8b9434c4b3f6b531",
      "name": "USB充电器",
      "officialName": "USB-Ladegerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8b9434c4b3f6b531"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8b9434c4b3f6b531"
          ]
        }
      },
      "evidenceIds": [
        "ear_8b9434c4b3f6b531"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：USB-Ladegerät",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_2b08109211d09fb5",
      "name": "电动卷帘带收卷器",
      "officialName": "Gurtwickler, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2b08109211d09fb5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2b08109211d09fb5"
          ]
        }
      },
      "evidenceIds": [
        "ear_2b08109211d09fb5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Gurtwickler, elektrisch",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1ea2208e3e762b8a",
      "name": "工业或医疗用途灯具",
      "officialName": "Leuchte für industrielle oder medizinische Zwecke",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1ea2208e3e762b8a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_1ea2208e3e762b8a"
          ]
        }
      },
      "evidenceIds": [
        "ear_1ea2208e3e762b8a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Leuchte für industrielle oder medizinische Zwecke",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_bc20ea4ac3f8f694",
      "name": "漏电断路器（FI）",
      "officialName": "Fehlerstrom-Schutzschalter (FI)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bc20ea4ac3f8f694"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_bc20ea4ac3f8f694"
          ]
        }
      },
      "evidenceIds": [
        "ear_bc20ea4ac3f8f694"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Fehlerstrom-Schutzschalter (FI)",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_abc3e0f8e2147efe",
      "name": "电脑电源",
      "officialName": "PC-Netzteil",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_abc3e0f8e2147efe"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_abc3e0f8e2147efe"
          ]
        }
      },
      "evidenceIds": [
        "ear_abc3e0f8e2147efe"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：PC-Netzteil",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ad9a722a44d165d2",
      "name": "LED 闪光弹力球",
      "officialName": "LED-Blinkflummi",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ad9a722a44d165d2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ad9a722a44d165d2"
          ]
        }
      },
      "evidenceIds": [
        "ear_ad9a722a44d165d2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：LED-Blinkflummi",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_f6de0dba9cab0af3",
      "name": "发光相框",
      "officialName": "Bilderrahmen, beleuchtet",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f6de0dba9cab0af3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f6de0dba9cab0af3"
          ]
        }
      },
      "evidenceIds": [
        "ear_f6de0dba9cab0af3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Bilderrahmen, beleuchtet",
          "带 LED 照明的相框，不具有屏幕",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_faa9c1723f6d034f",
      "name": "可升降桌／推车",
      "officialName": "höhenverstellbarer Tisch/Wagen",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_faa9c1723f6d034f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_faa9c1723f6d034f"
          ]
        }
      },
      "evidenceIds": [
        "ear_faa9c1723f6d034f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：höhenverstellbarer Tisch/Wagen",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a34910f54f17811a",
      "name": "USB线",
      "officialName": "USB-Kabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "finishedCable"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a34910f54f17811a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a34910f54f17811a"
          ]
        }
      },
      "evidenceIds": [
        "ear_a34910f54f17811a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：USB-Kabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          },
          "finishedCable": {
            "title": "是否为已装好接头的成品线缆？",
            "detail": "USB 线须两端都有 USB 接口。散装线材，或仅带线鼻、端套的半成品，请选“否”。",
            "yes": "是，完整成品线缆",
            "no": "否，米线或半成品"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7496fb66d6a0413a",
      "name": "呼吸运动监测仪",
      "officialName": "Atembewegungsmonitor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7496fb66d6a0413a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7496fb66d6a0413a"
          ]
        }
      },
      "evidenceIds": [
        "ear_7496fb66d6a0413a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Atembewegungsmonitor",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d55bbb889755a068",
      "name": "光纤电缆",
      "officialName": "Glasfaserkabel",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d55bbb889755a068"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d55bbb889755a068"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_699da2c3c3d7a803",
      "name": "自动停车位锁",
      "officialName": "Automatische Parkplatzsperre",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_699da2c3c3d7a803"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_699da2c3c3d7a803"
          ]
        }
      },
      "evidenceIds": [
        "ear_699da2c3c3d7a803"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Automatische Parkplatzsperre",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8025cfea85dc8211",
      "name": "带灯浴室柜／镜柜",
      "officialName": "beleuchteter Bad-/Spiegelschrank",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8025cfea85dc8211"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8025cfea85dc8211"
          ]
        }
      },
      "evidenceIds": [
        "ear_8025cfea85dc8211"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：beleuchteter Bad-/Spiegelschrank",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1cc892fa598f384b",
      "name": "电动升降书桌",
      "officialName": "Schreibtisch, höhenverstellbar",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1cc892fa598f384b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1cc892fa598f384b"
          ]
        }
      },
      "evidenceIds": [
        "ear_1cc892fa598f384b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Schreibtisch, höhenverstellbar",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7bfe53ecfcd5ac33",
      "name": "带图像稳定器的双筒望远镜",
      "officialName": "Fernglas mit Bildstabilsator",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7bfe53ecfcd5ac33"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7bfe53ecfcd5ac33"
          ]
        }
      },
      "evidenceIds": [
        "ear_7bfe53ecfcd5ac33"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Fernglas mit Bildstabilsator",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_080d68a678b03963",
      "name": "婴儿奶瓶清洗机",
      "officialName": "Babyflaschenreiniger",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_080d68a678b03963"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_080d68a678b03963"
          ]
        }
      },
      "evidenceIds": [
        "ear_080d68a678b03963"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Babyflaschenreiniger",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8c38c0a06f7ddf71",
      "name": "电子书阅读器",
      "officialName": "E-Book-Reader",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8c38c0a06f7ddf71"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8c38c0a06f7ddf71"
          ]
        }
      },
      "evidenceIds": [
        "ear_8c38c0a06f7ddf71"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：E-Book-Reader",
          "该类独立显示设备不受屏幕尺寸限制"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e05d93182f3414b6",
      "name": "音频线",
      "officialName": "Audiokabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "finishedCable"
        ],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e05d93182f3414b6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e05d93182f3414b6"
          ]
        }
      },
      "evidenceIds": [
        "ear_e05d93182f3414b6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Audiokabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ad8ee9e105791656",
      "name": "键盘",
      "officialName": "Tastatur",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ad8ee9e105791656"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ad8ee9e105791656"
          ]
        }
      },
      "evidenceIds": [
        "ear_ad8ee9e105791656"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Tastatur",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_39cf850914df7b39",
      "name": "婴儿食品加热器",
      "officialName": "Babykosterwärmer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_39cf850914df7b39"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_39cf850914df7b39"
          ]
        }
      },
      "evidenceIds": [
        "ear_39cf850914df7b39"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Babykosterwärmer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_af695362e9b190c5",
      "name": "电子画板",
      "officialName": "elektronische Maltafel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_af695362e9b190c5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_af695362e9b190c5"
          ]
        }
      },
      "evidenceIds": [
        "ear_af695362e9b190c5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：elektronische Maltafel"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b5e543ff2a3153cd",
      "name": "同轴电缆",
      "officialName": "Koaxialkabel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "finishedCable"
        ],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b5e543ff2a3153cd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b5e543ff2a3153cd"
          ]
        }
      },
      "evidenceIds": [
        "ear_b5e543ff2a3153cd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Koaxialkabel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_6c2c33fb43a39f14",
      "name": "智能书写板",
      "officialName": "Smart-Schreibblock",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6c2c33fb43a39f14"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_6c2c33fb43a39f14"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e995a4ea164be84a",
      "name": "血糖传感器",
      "officialName": "Blutzuckersensor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e995a4ea164be84a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e995a4ea164be84a"
          ]
        }
      },
      "evidenceIds": [
        "ear_e995a4ea164be84a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Blutzuckersensor",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_44b75efe7280441d",
      "name": "空控制柜",
      "officialName": "Leerer Schaltschrank",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_44b75efe7280441d"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_44b75efe7280441d"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_eae0b6d3478b594f",
      "name": "电动滑板",
      "officialName": "Elektroskateboard",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eae0b6d3478b594f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_eae0b6d3478b594f"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_bbb4b18e7652e064",
      "name": "儿童四轮摩托车",
      "officialName": "Kinder-Quad",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bbb4b18e7652e064"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_bbb4b18e7652e064"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a5158c4a2fd04ecb",
      "name": "发光地球仪",
      "officialName": "Leuchtglobus",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a5158c4a2fd04ecb"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a5158c4a2fd04ecb"
          ]
        }
      },
      "evidenceIds": [
        "ear_a5158c4a2fd04ecb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Leuchtglobus",
          "按 EAR 明确的尺寸备注补齐大小设备分支，搜索示例不代表唯一类别"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d1af3de3e8e090c4",
      "name": "血糖试纸",
      "officialName": "Blutzuckerteststreifen",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d1af3de3e8e090c4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d1af3de3e8e090c4"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3adbe69c4df58127",
      "name": "云台",
      "officialName": "Gimbal",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3adbe69c4df58127"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3adbe69c4df58127"
          ]
        }
      },
      "evidenceIds": [
        "ear_3adbe69c4df58127"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Gimbal",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a3cacebdb3d30eed",
      "name": "日光浴美黑床",
      "officialName": "Sonnenbank",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a3cacebdb3d30eed"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a3cacebdb3d30eed"
          ]
        }
      },
      "evidenceIds": [
        "ear_a3cacebdb3d30eed"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Sonnenbank",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_25078519730beb5f",
      "name": "电动医院病床",
      "officialName": "Krankenhausbett, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_25078519730beb5f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_25078519730beb5f"
          ]
        }
      },
      "evidenceIds": [
        "ear_25078519730beb5f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Krankenhausbett, elektrisch",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_fa38c50042f92a58",
      "name": "百叶窗",
      "officialName": "Jalousie",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fa38c50042f92a58"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fa38c50042f92a58"
          ]
        }
      },
      "evidenceIds": [
        "ear_fa38c50042f92a58"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Jalousie",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_493bcd639af40ad3",
      "name": "红外线舱",
      "officialName": "Infrarotkabine",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_493bcd639af40ad3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_493bcd639af40ad3"
          ]
        }
      },
      "evidenceIds": [
        "ear_493bcd639af40ad3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Infrarotkabine",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e1bf6ecf9bc36811",
      "name": "助浴升降椅",
      "officialName": "Badelift",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e1bf6ecf9bc36811"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e1bf6ecf9bc36811"
          ]
        }
      },
      "evidenceIds": [
        "ear_e1bf6ecf9bc36811"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Badelift",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_670c589771e4bdb4",
      "name": "无线路由器",
      "officialName": "WLAN-Router",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes",
          "size": "no"
        },
        "verification": {
          "mode": "recipe",
          "recipe": "ict",
          "required": [
            "size"
          ],
          "omitDefaults": [
            "size"
          ]
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 产品条目列出可用于私人家庭的小型信息和通信设备。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_670c589771e4bdb4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_670c589771e4bdb4"
          ]
        },
        "size": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_670c589771e4bdb4"
          ]
        }
      },
      "evidenceIds": [
        "ear_670c589771e4bdb4"
      ],
      "presentation": {
        "defaultsText": [
          "WLAN 路由器",
          "可用于私人家庭",
          "外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_441b8f0aa840c19a",
      "name": "无线网络设备",
      "officialName": "WLAN-Gerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_441b8f0aa840c19a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_441b8f0aa840c19a"
          ]
        }
      },
      "evidenceIds": [
        "ear_441b8f0aa840c19a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：WLAN-Gerät",
          "普通 WLAN 路由、转发或扩展设备",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_53c44477089829e2",
      "name": "KNX 楼宇控制设备",
      "officialName": "KNX-Gerät",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "displayArea",
          "size"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_53c44477089829e2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_53c44477089829e2"
          ]
        }
      },
      "evidenceIds": [
        "ear_53c44477089829e2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：KNX-Gerät",
          "纯触屏 KNX 设备按屏幕面积及用途分支判断"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {
          "displayArea": {
            "title": "是否为纯触摸屏操作，且屏幕面积大于 100 cm²？",
            "detail": "请同时确认操作方式和屏幕面积；不符合时，继续确认产品尺寸。",
            "yes": "是，纯触屏且面积大于 100 cm²",
            "no": "否，不符合上述条件"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b5a672d1de9df54a",
      "name": "发芽机",
      "officialName": "Keimautomat",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b5a672d1de9df54a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b5a672d1de9df54a"
          ]
        }
      },
      "evidenceIds": [
        "ear_b5a672d1de9df54a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Keimautomat",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ee8ad472e6414cfe",
      "name": "智能手表",
      "officialName": "Smartwatch",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        },
        "fixedSmall": true
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 将可穿戴智能手表列为可用于私人家庭的小型设备。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ee8ad472e6414cfe"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ee8ad472e6414cfe"
          ]
        }
      },
      "evidenceIds": [
        "ear_ee8ad472e6414cfe"
      ],
      "presentation": {
        "defaultsText": [
          "可用于私人家庭",
          "完整电动手表，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_887c9d56e951abef",
      "name": "吊扇",
      "officialName": "Deckenventilator",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_887c9d56e951abef"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_887c9d56e951abef"
          ]
        }
      },
      "evidenceIds": [
        "ear_887c9d56e951abef"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Deckenventilator"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_82f86f71fec93716",
      "name": "风扇",
      "officialName": "Ventilator",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "small",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_82f86f71fec93716"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_82f86f71fec93716"
          ]
        }
      },
      "evidenceIds": [
        "ear_82f86f71fec93716"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Ventilator"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_016e8c8a41695f3d",
      "name": "电动助力自行车",
      "officialName": "Pedelec",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_016e8c8a41695f3d"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_016e8c8a41695f3d"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e0c1ad114bb67637",
      "name": "完整灯具",
      "officialName": "Leuchte",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "size"
        ]
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 将完整灯具列为候选设备；需根据外部尺寸和使用环境区分。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e0c1ad114bb67637"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e0c1ad114bb67637"
          ]
        }
      },
      "evidenceIds": [
        "ear_e0c1ad114bb67637"
      ],
      "presentation": {
        "defaultsText": [
          "EAR 将完整灯具列为候选设备；需根据外部尺寸和使用环境区分。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_eb86fa7704584f81",
      "name": "摄像灯",
      "officialName": "Videoleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eb86fa7704584f81"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_eb86fa7704584f81"
          ]
        }
      },
      "evidenceIds": [
        "ear_eb86fa7704584f81"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Videoleuchte",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_9ba6d5a266e40fd4",
      "name": "太阳能灯",
      "officialName": "Solarleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9ba6d5a266e40fd4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9ba6d5a266e40fd4"
          ]
        }
      },
      "evidenceIds": [
        "ear_9ba6d5a266e40fd4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Solarleuchte",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_384b045d8d1278fd",
      "name": "发光瓷砖",
      "officialName": "beleuchtete Fliese",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_384b045d8d1278fd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_384b045d8d1278fd"
          ]
        }
      },
      "evidenceIds": [
        "ear_384b045d8d1278fd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：beleuchtete Fliese",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_cd37d94d76c9ef5b",
      "name": "潜水灯",
      "officialName": "Tauchleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cd37d94d76c9ef5b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cd37d94d76c9ef5b"
          ]
        }
      },
      "evidenceIds": [
        "ear_cd37d94d76c9ef5b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Tauchleuchte",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_43f40db01cec56de",
      "name": "逃生标志灯",
      "officialName": "Fluchtwegleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_43f40db01cec56de"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_43f40db01cec56de"
          ]
        }
      },
      "evidenceIds": [
        "ear_43f40db01cec56de"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Fluchtwegleuchte",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4f6943e46f0d44d1",
      "name": "派对灯",
      "officialName": "Partyleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4f6943e46f0d44d1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4f6943e46f0d44d1"
          ]
        }
      },
      "evidenceIds": [
        "ear_4f6943e46f0d44d1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Partyleuchte",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_b258dfa0f048f8a3",
      "name": "手电筒",
      "officialName": "Taschenleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes",
          "size": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目指带固定光源的手电筒。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b258dfa0f048f8a3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b258dfa0f048f8a3"
          ]
        },
        "size": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_b258dfa0f048f8a3"
          ]
        }
      },
      "evidenceIds": [
        "ear_b258dfa0f048f8a3"
      ],
      "presentation": {
        "defaultsText": [
          "可用于私人家庭",
          "内置固定光源，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_832953e4bce97547",
      "name": "房车加装室内灯",
      "officialName": "Wohnraumleuchte zum Nachrüsten (Wohnmobil, Wohnwagen)",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_832953e4bce97547"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_832953e4bce97547"
          ]
        }
      },
      "evidenceIds": [
        "ear_832953e4bce97547"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Wohnraumleuchte zum Nachrüsten (Wohnmobil, Wohnwagen)",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_f391a2111f2aa7d5",
      "name": "灯具悬吊供电组件",
      "officialName": "Leuchtenpendel",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f391a2111f2aa7d5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f391a2111f2aa7d5"
          ]
        }
      },
      "evidenceIds": [
        "ear_f391a2111f2aa7d5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Leuchtenpendel",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_67da2be38317ee45",
      "name": "路灯",
      "officialName": "Straßenleuchte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "large",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_67da2be38317ee45"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_67da2be38317ee45"
          ]
        }
      },
      "evidenceIds": [
        "ear_67da2be38317ee45"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Straßenleuchte",
          "沿用官方大型设备示例，任一外部尺寸大于 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e20e0fd4114ccac0",
      "name": "工作灯",
      "officialName": "Arbeitsscheinwerfer",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e20e0fd4114ccac0"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e20e0fd4114ccac0"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_fed9959f1e21dbd0",
      "name": "自行车照明设备",
      "officialName": "Fahrradbeleuchtung",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fed9959f1e21dbd0"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_fed9959f1e21dbd0"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_09054322d6ce5da1",
      "name": "LED灯带",
      "officialName": "LED-Streifen",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_09054322d6ce5da1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_09054322d6ce5da1"
          ]
        }
      },
      "evidenceIds": [
        "ear_09054322d6ce5da1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：LED-Streifen",
          "柔性设备按折叠或卷起后的最紧凑状态测量",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_5c06bb97d205a4e2",
      "name": "露营提灯",
      "officialName": "Campinglaterne",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5c06bb97d205a4e2"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_5c06bb97d205a4e2"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e29f1c11173b99a9",
      "name": "LED 眼镜",
      "officialName": "Brille mit LED",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e29f1c11173b99a9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e29f1c11173b99a9"
          ]
        }
      },
      "evidenceIds": [
        "ear_e29f1c11173b99a9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Brille mit LED",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_85da6104ac08b4be",
      "name": "LED变压器",
      "officialName": "LED-Transformator",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_85da6104ac08b4be"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_85da6104ac08b4be"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_5b837ca92035ae91",
      "name": "移动感应器",
      "officialName": "Bewegungsmelder",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5b837ca92035ae91"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5b837ca92035ae91"
          ]
        }
      },
      "evidenceIds": [
        "ear_5b837ca92035ae91"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Bewegungsmelder",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d752d09bec480f5e",
      "name": "接触器",
      "officialName": "Schütz",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d752d09bec480f5e"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d752d09bec480f5e"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d1263d74f85a866c",
      "name": "冰箱（带压缩机）",
      "officialName": "Kühlschrank (mit Kompressor)",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "thermal",
        "required": []
      },
      "facts": {
        "referenceShape": {
          "value": "该条目适用于含制冷剂的冰箱，设备类型还需区分家庭用途。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d1263d74f85a866c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d1263d74f85a866c"
          ]
        }
      },
      "evidenceIds": [
        "ear_d1263d74f85a866c"
      ],
      "presentation": {
        "defaultsText": [
          "该条目适用于含制冷剂的冰箱，设备类型还需区分家庭用途。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_722d1e20e3d95ad6",
      "name": "冰箱（热电式）",
      "officialName": "Kühlschrank (thermoelektrisch)",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "size"
        ]
      },
      "facts": {
        "referenceShape": {
          "value": "该条目的候选类型需按外部尺寸与使用环境区分。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_722d1e20e3d95ad6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_722d1e20e3d95ad6"
          ]
        }
      },
      "evidenceIds": [
        "ear_722d1e20e3d95ad6"
      ],
      "presentation": {
        "defaultsText": [
          "该条目的候选类型需按外部尺寸与使用环境区分。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_d82229aa5b652ed5",
      "name": "万用表",
      "officialName": "Multimeter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d82229aa5b652ed5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d82229aa5b652ed5"
          ]
        }
      },
      "evidenceIds": [
        "ear_d82229aa5b652ed5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Multimeter",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_dfff8bd38f974f7e",
      "name": "电子秒表",
      "officialName": "Stoppuhr",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dfff8bd38f974f7e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dfff8bd38f974f7e"
          ]
        }
      },
      "evidenceIds": [
        "ear_dfff8bd38f974f7e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Stoppuhr",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_af888a6840bf9758",
      "name": "电子棋钟",
      "officialName": "Schachuhr",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_af888a6840bf9758"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_af888a6840bf9758"
          ]
        }
      },
      "evidenceIds": [
        "ear_af888a6840bf9758"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Schachuhr",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_a29fe7cfd5e477e4",
      "name": "摇表器",
      "officialName": "Uhrenbeweger",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a29fe7cfd5e477e4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a29fe7cfd5e477e4"
          ]
        }
      },
      "evidenceIds": [
        "ear_a29fe7cfd5e477e4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Uhrenbeweger",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_fe47c258f9e090cf",
      "name": "钟表检测仪",
      "officialName": "Uhrenprüfer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "small",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fe47c258f9e090cf"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_fe47c258f9e090cf"
          ]
        }
      },
      "evidenceIds": [
        "ear_fe47c258f9e090cf"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Uhrenprüfer",
          "沿用官方小型设备示例，外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7f7c7b504bf4a91d",
      "name": "门铃变压器",
      "officialName": "Klingeltransformator",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7f7c7b504bf4a91d"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_7f7c7b504bf4a91d"
      ],
      "presentation": {
        "defaultsText": [],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "无附加功能的简单门铃变压器，EAR 列为不在适用范围；安装在 DIN 导轨上不影响该结论。带其他电气功能的型号请另行确认。"
    },
    {
      "id": "p_f1ff73d297169669",
      "name": "冰箱",
      "officialName": "Kühlschrank",
      "facts": {
        "referenceShape": {
          "value": "EAR 区分含制冷剂的压缩机制冷冰箱与热电冰箱，候选类型不同。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f1ff73d297169669"
          ]
        }
      },
      "evidenceIds": [
        "ear_d1263d74f85a866c",
        "ear_722d1e20e3d95ad6"
      ],
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "fridge",
        "required": []
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d1263d74f85a866c",
            "ear_722d1e20e3d95ad6"
          ]
        }
      },
      "presentation": {
        "defaultsText": [
          "EAR 区分含制冷剂的压缩机制冷冰箱与热电冰箱，候选类型不同。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "type": "family",
      "resolution": {
        "field": "cooling",
        "choices": {
          "yes": "p_d1263d74f85a866c",
          "no": "p_722d1e20e3d95ad6"
        }
      }
    },
    {
      "id": "p_ae992bd69e562f6e",
      "name": "HDMI 高清连接线",
      "officialName": "HDMI-Kabel",
      "facts": {
        "referenceShape": {
          "value": "EAR 搜索结果将 HDMI 线列为可家用小型设备，柔性设备按折叠或卷起后的最紧凑状态测量。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ae992bd69e562f6e"
          ]
        }
      },
      "evidenceIds": [
        "ear_ae992bd69e562f6e"
      ],
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes",
          "size": "no"
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ae992bd69e562f6e"
          ]
        },
        "size": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_ae992bd69e562f6e"
          ]
        }
      },
      "presentation": {
        "defaultsText": [
          "完整 HDMI 线缆",
          "可用于私人家庭",
          "外部尺寸均不超过 50 cm（柔性产品按最紧凑状态测量）"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      }
    },
    {
      "id": "p_1fb73722d82b1dbf",
      "name": "DP 显示连接线",
      "officialName": "Displayportkabel",
      "facts": {
        "referenceShape": {
          "value": "EAR 搜索结果将 DisplayPort 线列为可家用小型信息通信设备，柔性设备按折叠或卷起后的最紧凑状态测量。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1fb73722d82b1dbf"
          ]
        }
      },
      "evidenceIds": [
        "ear_1fb73722d82b1dbf"
      ],
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes",
          "size": "no"
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1fb73722d82b1dbf"
          ]
        },
        "size": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_1fb73722d82b1dbf"
          ]
        }
      },
      "presentation": {
        "defaultsText": [
          "完整 DisplayPort 数据线",
          "可用于私人家庭",
          "外部尺寸均不超过 50 cm（柔性产品按最紧凑状态测量）"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑尺寸测量，不按展开长度计算。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      }
    },
    {
      "id": "p_470c22c16cee2f48",
      "name": "光伏组件",
      "officialName": "Photovoltaikmodul",
      "facts": {
        "referenceShape": {
          "value": "独立光伏组件，将太阳能转换为电能；不是与其他设备组成的复杂套装。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_470c22c16cee2f48"
          ]
        }
      },
      "evidenceIds": [
        "ear_470c22c16cee2f48"
      ],
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "pv",
        "required": [
          "size"
        ]
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_470c22c16cee2f48"
          ]
        }
      },
      "presentation": {
        "defaultsText": [
          "独立光伏组件，将太阳能转换为电能；不是与其他设备组成的复杂套装。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_7d250a5404fb44c0",
      "name": "半导体制冷／除湿设备（珀尔帖）",
      "officialName": "Peltier-Entfeuchter / Kühlschrank (thermoelektrisch)",
      "facts": {
        "referenceShape": {
          "value": "EAR 搜索分别列示珀尔帖除湿机与热电冰箱，需核对设备种类、结构和尺寸；不能将所有珀尔帖设备视为同一产品。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7d250a5404fb44c0"
          ]
        }
      },
      "evidenceIds": [
        "ear_ed4f19973569078f",
        "ear_722d1e20e3d95ad6"
      ],
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "peltier",
        "required": []
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ed4f19973569078f",
            "ear_722d1e20e3d95ad6"
          ]
        }
      },
      "presentation": {
        "defaultsText": [
          "EAR 搜索分别列示珀尔帖除湿机与热电冰箱，需核对设备种类、结构和尺寸；不能将所有珀尔帖设备视为同一产品。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": true,
        "questionOverrides": {}
      },
      "type": "family",
      "resolution": {
        "field": "peltier",
        "choices": {
          "yes": "p_ed4f19973569078f",
          "no": "p_722d1e20e3d95ad6"
        }
      }
    },
    {
      "id": "p_4adfeae82542bfad",
      "name": "处理器散热风扇（CPU）",
      "officialName": "CPU-Lüfter",
      "facts": {
        "referenceShape": {
          "value": "EAR 将供 PC 内部安装的 CPU 风扇列为小型信息通信设备；不要与外置笔记本散热底座或无电功能散热片混同。",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4adfeae82542bfad"
          ]
        }
      },
      "evidenceIds": [
        "ear_4adfeae82542bfad"
      ],
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes",
          "size": "no"
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4adfeae82542bfad"
          ]
        },
        "size": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_4adfeae82542bfad"
          ]
        }
      },
      "presentation": {
        "defaultsText": [
          "供 PC 内部安装的 CPU 风扇",
          "可用于私人家庭",
          "外部尺寸均不超过 50 cm"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    }
  ]
};
