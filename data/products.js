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
      "officialReferenceConditions": "EAR 示例为不含其他电子元件的磁带，此类磁带不属于电气设备。",
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
      "officialReferenceConditions": "适用于壁挂或立式安装的红外加热器。",
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
      "officialReferenceConditions": "EAR 示例为仅带线端套管或接线鼻的电缆，此类电缆被视为零部件。",
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
      "officialReferenceConditions": "EAR 示例为故障手机、智能手机、平板电脑或笔记本电脑内部安装或自行更换的维修配件。",
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
      "officialReferenceConditions": "适用于供电子制作爱好者使用的单板电脑迷你 LED 交通灯模块。",
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
      "officialReferenceConditions": "适用于后装的倒车摄像头。",
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
      "officialReferenceConditions": "适用于内置太阳能电池、带 USB 接口且太阳能电池面积不超过 0.5 平方米的充电器；超过 0.5 平方米按光伏组件处理。",
      "officialReferenceOptions": [{"condition": "带 USB 接口且太阳能电池面积不超过 0.5 平方米", "result": "第 5 类 · 可用于家庭的小型设备"}, {"condition": "太阳能电池面积超过 0.5 平方米", "result": "按光伏组件判断，类别还需核对尺寸等条件"}],
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
      "officialReferenceConditions": "本参考不包括具有物理测量或监控等附加功能的设备；具有此类功能时为小型设备。家用或专用商用设备类型取决于使用地点。",
      "officialReferenceOptions": [{"condition": "无物理测量或监控等附加功能的 GPS 设备", "result": "第 6 类 · 家用或专用商用类型取决于使用地点"}, {"condition": "具有物理测量或监控等附加功能", "result": "小型设备，需结合规格和使用场景核对"}],
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
      "officialReferenceConditions": "适用于带交流电源插座等附加功能的便携储能电源。",
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
      "officialReferenceConditions": "EAR 示例为汽车拖车使用的 7 针或 13 针适配器，可用于照明连接；自行车照明需要注册。",
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
      "officialReferenceConditions": "适用于后装于汽车中控台、具备安卓平板完整功能且屏幕面积大于 100 平方厘米的车载收音机。",
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
      "officialReferenceConditions": "仅双轮自平衡交通工具需注册，例如平衡车、悬浮滑板或双轮自平衡轮椅；单轮或超过两轮的交通工具不在适用范围内。",
      "officialReferenceOptions": [{"condition": "双轮自平衡交通工具", "result": "第 4 类 · 可用于家庭的大型设备"}, {"condition": "单轮或多于两轮的交通工具", "result": "不在 ElektroG 适用范围内"}],
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
      "officialReferenceConditions": "衣物应在折叠后的最紧凑状态下测量尺寸。",
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
      "officialReferenceConditions": "适用于仅限工业或医疗用途、作为后装设备或独立设备的触摸屏。",
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
      "officialReferenceConditions": "适用于后装改装产品，例如带即插即用线束的排气阀门控制器。",
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
      "officialReferenceConditions": "EAR 示例为连接端子。",
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
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
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
      "scopeText": "EAR 将汽车拖车照明套件列为不在 ElektroG 适用范围内。请核对实际产品是否与该条目一致；EAR 提示自行车照明需注册。"
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
      "officialReferenceConditions": "适用于扫描印刷或数字文本，同时作为数字输入设备的扫描笔。",
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
      "officialReferenceConditions": "门锁通常与门分开，作为独立设备看待。",
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
      "officialReferenceConditions": "EAR 示例为带压电点火器的燃气烧烤炉，产品不得具有其他电气功能。",
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
      "officialReferenceConditions": "适用于具有电气功能的烟弹，例如内置不可拆卸的发热芯或 RFID 功能。",
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
      "officialReferenceConditions": "EAR 示例为未装配的电路板，以及只有导线线路或孔阵列的电路板；此类产品属于零部件。",
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
      "officialReferenceConditions": "适用于生物反馈及神经反馈训练设备。",
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
      "officialReferenceConditions": "适用于包含电池并具有内置照明、无线充电或交流电源插座等附加功能的设备。电量显示、充电接口、电池管理系统、内置通信模块及内置充电线仍属于电池部分；移动电源也受电池法规约束。",
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
      "officialReferenceConditions": "EAR 示例须仅用于商业用途，具有独立电源且无需连接电网，具备自行驱动的车轮，并且不得用于道路交通。",
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
      "officialReferenceConditions": "适用于供电子制作爱好者使用、主要用途是在屏幕上显示信息的设备。",
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
      "officialReferenceConditions": "适用于带北约接口的应急启动电缆；柔性设备应在折叠或卷起后的最紧凑状态下测量。",
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
      "officialReferenceConditions": "EAR 示例须仅用于接地，不得包含其他电气功能或电子元件。",
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
      "officialReferenceConditions": "适用于固定集成电气功能的床板架。",
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
      "officialReferenceConditions": "适用于与智能手机配对、没有自身 GPS 的蓝牙钥匙防丢器。",
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
      "officialReferenceConditions": "可替换的 LED 发光轮通常直径约 80 毫米，可代替普通轮子安装，作为独立电气设备。",
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
      "officialReferenceConditions": "适用于听音乐或免提通话的蓝牙 FM 发射器。",
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
      "officialReferenceConditions": "EAR 示例为部分装配电缆或按长度销售的电缆；仅装线端套管或环形接线鼻的电缆也被视为未装配。",
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
      "officialReferenceConditions": "适用于注水式落地灯。",
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
      "officialReferenceConditions": "EAR 示例为不含其他电子元件的磁带，此类磁带不属于电气设备。",
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
      "officialReferenceConditions": "适用于帮助视力障碍者阅读的 LCD 显示设备；此类设备不论屏幕尺寸均属于屏幕设备。",
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
      "officialReferenceConditions": "适用于通过线缆摄像头连接智能手机的检测摄像机；柔性设备应在折叠或卷起后的最紧凑状态下测量。",
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
      "officialReferenceConditions": "适用于用水蒸气消毒奶瓶、奶嘴及配件的设备。",
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
      "officialReferenceConditions": "可替换的 LED 发光轮是独立电气设备；无电机滑板车不是交通工具。若滑板车固定集成 LED，则应注册为大型设备。",
      "officialReferenceOptions": [{"condition": "可替换的 LED 发光轮", "result": "第 5 类 · 独立小型设备"}, {"condition": "无电机滑板车固定集成 LED", "result": "第 4 类 · 大型设备"}],
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
      "officialReferenceConditions": "EAR 示例用于连接厨房炉灶，包含部分装配的电缆。",
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
      "officialReferenceConditions": "EAR 将电池管理系统视为电池的一部分，即使单独销售也是如此；产品不得具有其他附加电气功能。",
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
      "officialReferenceConditions": "适用于时速约 5 公里的电动幼儿玩具车；其属于电动玩具而非交通工具，即使超过两轮也需注册。",
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
      "officialReferenceConditions": "EAR 示例为避雷针。",
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
      "officialReferenceConditions": "NFC 或 RFID 是整体产品唯一的电气功能时，如芯片不能简单且无损地移除，整体产品成为电气设备。家用或专用商用类型取决于使用地点和目标群体；还需查看 NFC 或 RFID 芯片条目的说明。",
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
      "officialReferenceConditions": "适用于赛车运动中使用的换挡提示灯或挡位显示器。",
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
      "officialReferenceConditions": "适用于时速最高约 25 公里的儿童摩托车：仅双轮电动自行车需注册，超过两轮不在适用范围内。时速约 5 公里的幼儿车属于玩具，无论轮数均需注册。",
      "officialReferenceOptions": [{"condition": "时速最高约 25 公里的双轮电动自行车型儿童摩托", "result": "第 4 类 · 可用于家庭的大型设备"}, {"condition": "超过两轮的交通工具", "result": "不在 ElektroG 适用范围内"}, {"condition": "时速约 5 公里的幼儿玩具车", "result": "属于玩具，无论轮数均需注册；具体类别须核对"}],
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
      "officialReferenceConditions": "EAR 示例为不带芯片、仅带磁条的磁卡。",
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
      "officialReferenceConditions": "适用于由座椅或平台、驱动装置和安装在楼梯或墙壁上的承载导轨组成的楼梯升降椅；EAR 说明其不属于大型固定设备豁免。",
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
      "officialReferenceConditions": "EAR 示例为机动车法定必备照明；自行车照明、工作灯和氛围灯需要注册。",
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
      "officialReferenceConditions": "EAR 示例仅包括卫星锅及支架，不含 LNB，也不含其他电子元件。",
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
      "officialReferenceConditions": "适用于户外导航及全球消息传输设备。",
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
      "officialReferenceConditions": "家用或专用商用类型取决于使用地点。扫描后若直接向私人终端用户提供功能，例如促销、信息或抽奖，则为可家用设备；若芯片仅服务于商用用户且按预期经常进入家庭，例如仅用于防盗和商品管理，则不在 ElektroG 适用范围内。",
      "officialReferenceOptions": [{"condition": "扫描后直接向私人终端用户提供功能", "result": "第 6 类 · 可用于家庭的信息和通信设备"}, {"condition": "仅服务商用用户且按预期经常进入家庭", "result": "不在 ElektroG 适用范围内"}, {"condition": "其他情况", "result": "按使用地点和用途核对家用或专用商用设备类型"}],
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
      "officialReferenceConditions": "适用于带键盘、控制电视或投影仪等设备的多媒体遥控器。",
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
      "officialReferenceConditions": "适用于供企业与顾客互动、通过大型触摸屏下单的自助终端，例如快餐店点餐机。",
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
      "officialReferenceConditions": "适用于为非电声乐器后装的拾音器。",
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
      "officialReferenceConditions": "适用于固定内置电机的遮阳棚。",
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
      "officialReferenceConditions": "适用于铣床、3D 打印机等自制项目控制设备；带触摸控制、屏幕面积大于 100 平方厘米的型号对应屏幕设备，其他参考型号对应小型设备。",
      "officialReferenceOptions": [{"condition": "触摸控制且屏幕面积大于 100 平方厘米的自制项目模块", "result": "第 2 类 · 可用于家庭的屏幕设备"}, {"condition": "EAR 所列其他自制项目模块示例", "result": "第 5 类 · 可用于家庭的小型设备；实际产品仍需核对"}],
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
      "officialReferenceConditions": "适用于完全制成的线缆，一端为欧规插头、圆孔插头或音频接口；柔性设备应在折叠或卷起后的最紧凑状态下测量。",
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
      "officialReferenceConditions": "适用于人力驱动且固定集成照明的普通滑板；无电机滑板不是交通工具。可替换的 LED 发光轮则为独立小型设备。",
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
      "officialReferenceConditions": "适用于后装的车辆附加仪表，车速表除外。",
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
      "officialReferenceConditions": "适用于作为后装件销售的燃气烧烤炉 LED 旋钮。",
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
      "officialReferenceConditions": "独立或单独销售的电动机需注册；EAR 同时列出不在适用范围内的可能结果，需结合实际产品用途和结构核对。",
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
      "officialReferenceConditions": "适用于仅供信息和通信技术使用的天线；独立或单独销售的天线需注册。家用或专用商用类型取决于使用地点；EAR 同时列出不在适用范围内的可能结果。",
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
      "officialReferenceConditions": "适用于将模拟视频信号编码为数字信号的设备，例如视频监控或视频流设备；家用或专用商用类型取决于使用地点。",
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
      "officialReferenceConditions": "EAR 示例为自行移动的机器，仅用于商业用途；不得为家庭生活环境设计或出售至家庭。",
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
      "officialReferenceConditions": "适用于放置笔记本电脑以进行冷却的底座风扇。",
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
      "officialReferenceConditions": "EAR 示例为带预制孔阵列的未装配电路板。",
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
      "officialReferenceConditions": "EAR 示例为具有座位、三轮或四轮的电动代步车；EAR 说明单轮或多于两轮的交通工具不在适用范围内。",
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
      "officialReferenceConditions": "EAR 示例为电熔焊接套筒。",
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
      "officialReferenceConditions": "EAR 示例为带内置 USB 充电接口的电池。",
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
      "officialReferenceConditions": "适用于带 USB 接口的墙壁插座。",
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
      "officialReferenceConditions": "适用于单独销售、作为激光打印机耗材或配件的感光鼓单元。",
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
      "officialReferenceConditions": "适用于最大外部尺寸不超过 50 厘米、集成电气功能的小家具。",
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
      "officialReferenceConditions": "EAR 示例为纯光学光纤电缆，仅传输光或光脉冲，不含任何电子元件。",
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
      "officialReferenceConditions": "适用于配合专用笔即时数字化书写内容、不带 LCD 屏幕且不带平板的输入设备。",
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
      "officialReferenceConditions": "EAR 示例为空控制柜。",
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
      "officialReferenceConditions": "EAR 说明：两轮电动滑板或电动摇摆板属于可用于家庭的大型设备；其他轮数的电动滑板无需注册。",
      "officialReferenceOptions": [{"condition": "两轮电动滑板或电动摇摆板", "result": "第 4 类 · 可用于家庭的大型设备"}, {"condition": "其他轮数的电动滑板", "result": "不在 ElektroG 适用范围内"}],
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
      "officialReferenceConditions": "EAR 示例为最高时速不超过 25 公里的四轮儿童车辆；约 5 公里/小时的幼儿车辆视为玩具，不论轮数均需注册。",
      "officialReferenceOptions": [{"condition": "EAR 示例中的四轮儿童交通工具", "result": "不在 ElektroG 适用范围内"}, {"condition": "时速约 5 公里的幼儿玩具车", "result": "属于玩具，无论轮数均需注册；具体类别须核对"}],
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
      "officialReferenceConditions": "EAR 示例为血糖试纸。",
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
      "officialReferenceConditions": "仅双轮、额定持续功率不超过 250 瓦且脚踏助力速度不超过 25 公里每小时的电动助力自行车需注册；EAR 将其他电动自行车列为不在适用范围内。",
      "officialReferenceOptions": [{"condition": "双轮、额定持续功率不超过 250 瓦且助力速度不超过 25 公里/小时", "result": "第 4 类 · 可用于家庭的大型设备"}, {"condition": "其他电动自行车", "result": "EAR 示例列为不在 ElektroG 适用范围内"}],
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
      "officialReferenceConditions": "适用于后装及单独使用的工作灯。",
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
      "officialReferenceConditions": "适用于自行车或电动自行车的 LED 前灯或尾灯。",
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
      "officialReferenceConditions": "适用于 LED 露营提灯，也包括带光伏电池、发电机或其他附加功能的型号。",
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
      "officialReferenceConditions": "适用于单独销售、用于灯光控制的 LED 变压器。",
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
      "officialReferenceConditions": "EAR 示例为接触器。",
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
      "officialReferenceConditions": "EAR 示例为无附加功能的简单门铃变压器；安装在 DIN 导轨上也无需注册。",
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
    },
    {
      "id": "p_gap_g008",
      "name": "热泵干衣机",
      "officialName": "Wärmepumpentrockner",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g008"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g008"
      ],
      "presentation": {
        "defaultsText": [
          "依据 EAR 产品示例，产品形态及使用场景需核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g010",
      "name": "电视",
      "officialName": "Fernseher",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g010"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g010"
      ],
      "presentation": {
        "defaultsText": [
          "依据 EAR 产品示例，产品形态及使用场景需核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g012",
      "name": "投影仪",
      "officialName": "Beamer",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g012"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g012"
      ],
      "presentation": {
        "defaultsText": [
          "依据 EAR 产品示例，产品形态及使用场景需核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g028",
      "name": "微波炉",
      "officialName": "Mikrowellengerät",
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
          },
          {
            "kind": "large",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g028"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g028"
      ],
      "presentation": {
        "defaultsText": [
          "依据 EAR 产品示例，产品形态及使用场景需核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g038",
      "name": "电水壶",
      "officialName": "Wasserkocher",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g038"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g038"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g041",
      "name": "烤面包机",
      "officialName": "Toaster",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g041"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g041"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g059",
      "name": "电熨斗",
      "officialName": "Bügeleisen",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g059"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g059"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g061",
      "name": "吸尘器",
      "officialName": "Staubsauger",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g061"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g061"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g065",
      "name": "空气净化器",
      "officialName": "Luftreiniger",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g065"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g065"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g066",
      "name": "加湿器",
      "officialName": "Luftbefeuchter",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g066"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g066"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g068",
      "name": "电热毯",
      "officialName": "Heizdecke",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g068"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g068"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑状态测量。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g071",
      "name": "灭蚊灯",
      "officialName": "Insektenvernichter",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g071"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g071"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g078",
      "name": "电烙铁",
      "officialName": "Lötkolben",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g078"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g078"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g080",
      "name": "高压清洗机",
      "officialName": "Hochdruckreiniger",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g080"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g080"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g081",
      "name": "插排",
      "officialName": "Steckdosenleiste",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g081"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g081"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "compact",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑状态测量。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g095",
      "name": "宠物自动喂食器",
      "officialName": "Tierfutterautomat",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g095"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g095"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g096",
      "name": "3D打印机",
      "officialName": "3D-Drucker",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g096"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g096"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g117",
      "name": "网络摄像头",
      "officialName": "Webcam",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g117"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g117"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g121",
      "name": "音箱",
      "officialName": "Lautsprecher",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g121"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g121"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g122",
      "name": "耳机",
      "officialName": "Kopfhörer",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g122"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g122"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g124",
      "name": "游戏机",
      "officialName": "Spielekonsole",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g124"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g124"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g131",
      "name": "无人机",
      "officialName": "Drohne",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g131"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g131"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g026",
      "name": "洗衣机",
      "officialName": "Waschmaschine",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g026"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_gap_g026",
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据 EAR 示例及一般尺寸规则判断，超出普通设备条件的型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g027",
      "name": "洗碗机",
      "officialName": "Geschirrspüler",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g027"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_gap_g027",
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据 EAR 示例及一般尺寸规则判断，超出普通设备条件的型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g088",
      "name": "电子血压计",
      "officialName": "Blutdruckmessgerät",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g088"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g088"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g100",
      "name": "电源逆变器",
      "officialName": "Wechselrichter",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g100"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g100"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g115",
      "name": "打印机",
      "officialName": "Drucker",
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
            "kind": "ict",
            "household": "no"
          },
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g115"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g115"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g110",
      "name": "U盘",
      "officialName": "USB-Stick",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g110"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g110"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g130",
      "name": "读卡器",
      "officialName": "Kartenleser",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g130"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g130"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g102",
      "name": "笔记本电脑",
      "officialName": "Notebook",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g102"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g102"
      ],
      "presentation": {
        "defaultsText": [
          "参考 EAR 产品示例；专用型号需核对用途和产品结构。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g105",
      "name": "平板电脑",
      "officialName": "Tablet",
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g105"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g105"
      ],
      "presentation": {
        "defaultsText": [
          "参考 EAR 产品示例；专用型号需核对用途和产品结构。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g108",
      "name": "DSL调制解调器",
      "officialName": "Modem",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g108"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g108"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g111",
      "name": "移动硬盘",
      "officialName": "Festplatte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g111"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g111"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g113",
      "name": "显卡",
      "officialName": "Erweiterungskarte für Computer",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g113"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g113"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g114",
      "name": "主板",
      "officialName": "Motherboard",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g114"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g114"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g128",
      "name": "对讲机",
      "officialName": "Walkie Talkie",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g128"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g128"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g129",
      "name": "IP电话",
      "officialName": "Telefon",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g129"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g129"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g112",
      "name": "固态硬盘",
      "officialName": "Festplatte",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
        "variants": [
          {
            "kind": "ict",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g111"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g111"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g049",
      "name": "滴滤咖啡机",
      "officialName": "Kaffeemaschine",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g049"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g049"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g056",
      "name": "电动剃须刀",
      "officialName": "Rasierapparat",
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g056"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g056"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g086",
      "name": "电子秤",
      "officialName": "Waage",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "size"
        ],
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g086"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g086"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 产品示例核对适用条件；无对应尺寸或用途的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g011",
      "name": "显示器",
      "officialName": "Monitor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g011"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g011"
      ],
      "presentation": {
        "defaultsText": [
          "独立显示器或显示设备；不包含投影仪及未构成终端的组件。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g009",
      "name": "饮水机",
      "officialName": "Heiß-/Kaltwasserbereiter",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "small",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3cf021c8417481b8",
            "ear_2a57f3a4e9c01342"
          ]
        }
      },
      "evidenceIds": [
        "ear_3cf021c8417481b8",
        "ear_2a57f3a4e9c01342"
      ],
      "presentation": {
        "defaultsText": [
          "非水介质循环按温度交换设备判断；其他完整设备按尺寸判断，官方示例未覆盖的型号需进一步确认。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g023",
      "name": "植物生长灯",
      "officialName": "EAR 灯具与光源分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "lighting",
        "required": []
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rules_lighting_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rules_lighting_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "仅适用于完整独立光源或完整灯具；卤素白炽灯等特殊适用范围需另核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g039",
      "name": "电饭锅",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g040",
      "name": "空气炸锅",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g042",
      "name": "电压力锅",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g043",
      "name": "多用途锅",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g045",
      "name": "破壁机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g046",
      "name": "榨汁机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g047",
      "name": "手持搅拌棒",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g048",
      "name": "胶囊咖啡机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g050",
      "name": "电蒸锅",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g051",
      "name": "酸奶机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g052",
      "name": "电热饭盒",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g053",
      "name": "电吹风",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g054",
      "name": "直发器",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g055",
      "name": "卷发棒",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g057",
      "name": "电动牙刷",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g058",
      "name": "冲牙器",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g060",
      "name": "挂烫机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g062",
      "name": "扫地机器人",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g064",
      "name": "蒸汽拖把",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g072",
      "name": "驱蚊器",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g073",
      "name": "电钻",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g074",
      "name": "角磨机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g075",
      "name": "电锯",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g076",
      "name": "电锤",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g077",
      "name": "电链锯",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g079",
      "name": "割草机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g087",
      "name": "电子体温计",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g089",
      "name": "血氧仪",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g090",
      "name": "筋膜枪",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g091",
      "name": "颈部按摩仪",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g092",
      "name": "鱼缸水泵",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g093",
      "name": "鱼缸加热棒",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g094",
      "name": "宠物电推剪",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g097",
      "name": "擦窗机器人",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g001",
      "name": "空调",
      "officialName": "EAR 温度交换设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "thermal",
        "required": [
          "eligibleThermal"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "需符合温度交换设备与适用范围条件。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g006",
      "name": "热泵",
      "officialName": "EAR 温度交换设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "thermal",
        "required": [
          "eligibleThermal"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "需符合温度交换设备与适用范围条件。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g007",
      "name": "空气能热水器",
      "officialName": "EAR 温度交换设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "thermal",
        "required": [
          "eligibleThermal"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "需符合温度交换设备与适用范围条件。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g013",
      "name": "监视器（安防）",
      "officialName": "Monitor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "standaloneDisplay"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g011"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g011"
      ],
      "presentation": {
        "defaultsText": [
          "限完整显示设备；组件或其他特殊设备请核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g014",
      "name": "拼接屏",
      "officialName": "Monitor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "standaloneDisplay"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g011"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g011"
      ],
      "presentation": {
        "defaultsText": [
          "限完整显示设备；组件或其他特殊设备请核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g015",
      "name": "数字标牌",
      "officialName": "Monitor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "standaloneDisplay"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g011"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g011"
      ],
      "presentation": {
        "defaultsText": [
          "限完整显示设备；组件或其他特殊设备请核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g016",
      "name": "电子墨水显示器",
      "officialName": "Monitor",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "standaloneDisplay"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g011"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g011"
      ],
      "presentation": {
        "defaultsText": [
          "限完整显示设备；组件或其他特殊设备请核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g022",
      "name": "智能灯泡",
      "officialName": "EAR 灯具与光源分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "lighting",
        "required": []
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rules_lighting_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rules_lighting_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "仅适用于完整独立光源或完整灯具；卤素白炽灯等特殊适用范围需另核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g024",
      "name": "紫外线杀菌灯",
      "officialName": "EAR 灯具与光源分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "lighting",
        "required": []
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rules_lighting_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rules_lighting_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "仅适用于完整独立光源或完整灯具；卤素白炽灯等特殊适用范围需另核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g098",
      "name": "摄影灯",
      "officialName": "EAR 灯具与光源分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "lighting",
        "required": []
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rules_lighting_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rules_lighting_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "仅适用于完整独立光源或完整灯具；卤素白炽灯等特殊适用范围需另核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g099",
      "name": "射灯",
      "officialName": "EAR 灯具与光源分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "lighting",
        "required": []
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rules_lighting_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rules_lighting_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "仅适用于完整独立光源或完整灯具；卤素白炽灯等特殊适用范围需另核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g017",
      "name": "车载显示屏",
      "officialName": "EAR 排除情形",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "standaloneDisplay"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_scope_exclusions_20261102",
            "ear_gap_g011"
          ]
        }
      },
      "evidenceIds": [
        "ear_scope_exclusions_20261102",
        "ear_gap_g011"
      ],
      "presentation": {
        "defaultsText": [
          "限已确认不受车辆专用部件排除的完整显示设备；其他情况需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "eligibleEEE": {
            "title": "设备是否属于不受车辆专用部件排除的完整电气设备？",
            "detail": "请确认它不是仅能作为被排除车辆的专用组成部分发挥功能的设备；仅凭“可拆卸”不能确定。无法确认请选择“否”。",
            "yes": "是，已确认不属于该排除情形",
            "no": "否或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g019",
      "name": "卤素灯泡",
      "officialName": "EAR 排除情形",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "lighting",
        "required": []
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_scope_exclusions_20261102",
            "ear_rules_lighting_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_scope_exclusions_20261102",
        "ear_rules_lighting_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "请确认实际光源技术；卤素白炽灯和无法确认的情形需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g025",
      "name": "汽车灯泡",
      "officialName": "EAR 排除情形",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "lighting",
        "required": [
          "eligibleEEE"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_scope_exclusions_20261102",
            "ear_rules_lighting_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_scope_exclusions_20261102",
        "ear_rules_lighting_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于已确认不受车辆专用部件排除的设备；白炽灯和其他特殊情况需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "eligibleEEE": {
            "title": "设备是否属于不受车辆专用部件排除的完整电气设备？",
            "detail": "请确认它不是仅能作为被排除车辆的专用组成部分发挥功能的设备；仅凭“可拆卸”不能确定。无法确认请选择“否”。",
            "yes": "是，已确认不属于该排除情形",
            "no": "否或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g003",
      "name": "酒柜",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据设备适用范围、循环结构和尺寸判断；特殊型号需另行核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g005",
      "name": "医用冰箱",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据设备适用范围、循环结构和尺寸判断；特殊型号需另行核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g067",
      "name": "冷风扇",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据设备适用范围、循环结构和尺寸判断；特殊型号需另行核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g069",
      "name": "电热毛巾架",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据设备适用范围、循环结构和尺寸判断；特殊型号需另行核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g070",
      "name": "暖手宝",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据设备适用范围、循环结构和尺寸判断；特殊型号需另行核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g029",
      "name": "烤箱",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g030",
      "name": "蒸烤一体机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g032",
      "name": "电磁炉（嵌入式）",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g033",
      "name": "集成灶",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g034",
      "name": "消毒柜",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g035",
      "name": "跑步机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g036",
      "name": "健身车",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g044",
      "name": "便携电磁炉",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g063",
      "name": "洗地机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g083",
      "name": "电池充电器",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g084",
      "name": "智能插座",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g082",
      "name": "电源适配器",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "ordinaryScope",
          "size",
          "ict"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。",
          "独立充电器、电脑专用内置电源及不同用途的适配器可能不同。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "ict": {
            "title": "电源适配器属于哪种类型？",
            "detail": "EAR 区分电脑内置电源和其他电源适配器；不属于以下两种情况时请进一步复核。",
            "yes": "电脑内置电源",
            "no": "其他独立电源适配器"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g103",
      "name": "台式电脑",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "ordinaryScope",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          },
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g104",
      "name": "一体机电脑",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "displayArea",
          "size",
          "ict"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g106",
      "name": "交换机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "ordinaryScope",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          },
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g107",
      "name": "光猫",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "ordinaryScope",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          },
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g109",
      "name": "机顶盒",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。",
          "按主要功能为摄像、音视频接收、录像或音频播放的完整设备判断；其他用途请人工核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g116",
      "name": "扫描仪",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "ordinaryScope",
          "size",
          "ict"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "ict": {
            "title": "扫描设备属于哪种类型？",
            "detail": "EAR 将平板文件扫描器、数据录入扫描笔与 3D 或胶片扫描器列为不同示例；其他类型请改用条件引导或复核。",
            "yes": "平板文件扫描器或数据录入扫描笔",
            "no": "3D 扫描器或胶片扫描器"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g118",
      "name": "监控摄像头",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。",
          "仅限完整摄像设备；特殊车辆专用组件请核对范围。",
          "按主要功能为摄像、音视频接收、录像或音频播放的完整设备判断；其他用途请人工核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g119",
      "name": "网络硬盘录像机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。",
          "按主要功能为摄像、音视频接收、录像或音频播放的完整设备判断；其他用途请人工核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {},
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g123",
      "name": "智能音箱",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。",
          "按主要功能为摄像、音视频接收、录像或音频播放的完整设备判断；其他用途请人工核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "ordinaryScope": {
            "title": "产品主要用于声音播放，且属于完整电气设备吗？",
            "detail": "请确认本产品是音箱，不属于主要用于通信的其他设备，也不涉及特殊排除情形。无法确认请选择“否”。",
            "yes": "是，完整音频播放设备",
            "no": "否或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g126",
      "name": "POS 收银机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "displayArea",
          "size",
          "ict"
        ],
        "variants": [
          {
            "kind": "screen",
            "household": "yes"
          },
          {
            "kind": "screen",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。",
          "EAR 对触摸屏一体式收银系统及普通收银机有不同示例；请核对实际设备。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "displayArea": {
            "title": "是否为触摸屏一体式收银系统？",
            "detail": "请选择 EAR 目录中具有显示屏的一体式收银系统；无显示屏或非该类产品选否。",
            "yes": "是，触摸屏一体式系统",
            "no": "否，其他类型"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g127",
      "name": "扫码枪",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "ordinaryScope",
          "size"
        ],
        "variants": [
          {
            "kind": "large",
            "household": "yes"
          },
          {
            "kind": "large",
            "household": "no"
          },
          {
            "kind": "ict",
            "household": "no"
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ict_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ict_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "根据设备主要用途、规格及适用范围判断。",
          "EAR 条码扫描器示例为专业场所使用；小型家用型号需进一步核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g031",
      "name": "燃气灶",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于普通完整设备；其他情况请按实际情况核对适用范围。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          },
          "ordinaryScope": {
            "title": "除点火外，是否还有其他必需的电气功能？",
            "detail": "仅使用电子或压电点火的燃气设备涉及特殊范围判断；其他排除情形也需核对。",
            "yes": "是，有其他必需电气功能且无特殊排除",
            "no": "否、仅点火或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g101",
      "name": "光伏储能一体机",
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
        "questionOverrides": {
          "integratedInverter": {
            "title": "是否为电池和逆变器同壳的交流储能设备？",
            "detail": "仅适用于 EAR 的交流储能设备示例；独立逆变器、直流储能或其他组合请选择“否”。",
            "yes": "是，同壳交流储能设备",
            "no": "否或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_gap_g085",
      "name": "车载充电器",
      "officialName": "EAR 车辆设备适用范围",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "eligibleEEE"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_scope_exclusions_20261102",
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_scope_exclusions_20261102",
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "适用于已确认不受车辆专用部件排除的完整充电设备；按尺寸判断。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "eligibleEEE": {
            "title": "设备是否属于不受车辆专用部件排除的完整电气设备？",
            "detail": "请确认它不是仅能作为被排除车辆的专用组成部分发挥功能的设备；仅凭“可拆卸”不能确定。无法确认请选择“否”。",
            "yes": "是，已确认不属于该排除情形",
            "no": "否或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_413",
      "name": "椭圆机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按普通完整电器的适用范围及尺寸判断；特殊型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_414",
      "name": "划船机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按普通完整电器的适用范围及尺寸判断；特殊型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_415",
      "name": "养生壶",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按普通完整电器的适用范围及尺寸判断；特殊型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_416",
      "name": "面包机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按普通完整电器的适用范围及尺寸判断；特殊型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_417",
      "name": "电陶炉",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按普通完整电器的适用范围及尺寸判断；特殊型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_418",
      "name": "豆浆机",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        },
        "ordinaryScope": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": []
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按普通完整电器的适用范围及尺寸判断；特殊型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        },
        "scopeDefaultEditable": true
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_419",
      "name": "焊台",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按普通完整电器的适用范围及尺寸判断；特殊型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "有任一外部尺寸大于 50 cm 吗？",
            "detail": "测量产品本体，不含包装；柔性设备按折叠或卷起后的最紧凑状态测量。恰好 50 cm 选择“没有”。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_water_blanket",
      "name": "水暖毯",
      "officialName": "EAR 设备分类条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "依据设备适用范围、循环结构和尺寸判断；特殊型号需另行核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "size": {
            "title": "折叠或卷起后，有任一外部尺寸大于 50 cm 吗？",
            "detail": "按折叠或卷起后的最紧凑状态测量，不含包装。",
            "yes": "有，大于 50 cm",
            "no": "没有，均不大于 50 cm"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_review_421",
      "name": "激光电视",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_422",
      "name": "广告机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_423",
      "name": "T8 灯管",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_424",
      "name": "T5 灯管",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_425",
      "name": "石英灯",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_426",
      "name": "洗烘一体机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [
          "eligibleEEE",
          "thermal",
          "size"
        ],
        "variants": [
          {
            "kind": "thermal",
            "household": "yes"
          },
          {
            "kind": "thermal",
            "household": "no"
          },
          {
            "kind": "large",
            "household": "yes"
          },
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
          }
        ],
        "fixedSmall": false
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_rule_thermal_ordinary_20261102",
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_rule_thermal_ordinary_20261102",
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按完整设备的循环结构与尺寸依据 EAR 一般条件推导；组合型号正式注册前需核对。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "eligibleEEE": {
            "title": "是否为适用 ElektroG 的完整电动洗烘一体机？",
            "detail": "请确认产品依靠电力且不是大型固定工业设施等排除情形。",
            "yes": "是，符合以上条件",
            "no": "否或无法确认"
          },
          "thermal": {
            "title": "是否具有使用制冷剂等非水介质的热泵循环？",
            "detail": "请核对产品说明书；普通电加热、没有非水介质热泵循环的型号选“否”。",
            "yes": "是，有非水介质热泵循环",
            "no": "否，没有此类循环"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_review_427",
      "name": "光波炉",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_428",
      "name": "烧水壶",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_429",
      "name": "高压锅",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_430",
      "name": "电磁炉",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_431",
      "name": "胶囊机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_432",
      "name": "蒸锅",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_433",
      "name": "吹风机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_434",
      "name": "风筒",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_435",
      "name": "夹板",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_436",
      "name": "剃须刀",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_437",
      "name": "刮胡刀",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_438",
      "name": "拖地机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_439",
      "name": "净化器",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_440",
      "name": "冷风机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_441",
      "name": "暖手器",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_442",
      "name": "圆锯",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_443",
      "name": "曲线锯",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_444",
      "name": "油锯",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ordinary",
        "required": [
          "eligibleEEE"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_scope_exclusions_20261102",
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_scope_exclusions_20261102",
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "仅对实际为电力驱动锯链的完整设备按尺寸判断；燃油动力及不明型号需复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "eligibleEEE": {
            "title": "这是否为电力驱动锯链的完整电链锯？",
            "detail": "燃油动力油锯、仅有点火电路的设备或无法确定的型号请选择“否”。",
            "yes": "是，电力驱动的完整电链锯",
            "no": "否或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_review_445",
      "name": "除草机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_446",
      "name": "洗车机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_447",
      "name": "电源插座",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_448",
      "name": "充电头",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_449",
      "name": "充电器",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_450",
      "name": "体重秤",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_451",
      "name": "厨房秤",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_452",
      "name": "过滤泵",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_453",
      "name": "喂食器",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_454",
      "name": "补光灯",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_455",
      "name": "储能一体机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_456",
      "name": "主机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_457",
      "name": "一体机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_458",
      "name": "调制解调器",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_459",
      "name": "猫",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_460",
      "name": "硬盘",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_461",
      "name": "GPU（其他情况）",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_462",
      "name": "复印机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "supported",
      "decision": {
        "mode": "recipe",
        "recipe": "ict",
        "required": [
          "ordinaryScope"
        ]
      },
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_copier_20261102",
            "ear_rule_ordinary_20261102"
          ]
        }
      },
      "evidenceIds": [
        "ear_copier_20261102",
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {
        "defaultsText": [
          "按 EAR 复印机示例及通用尺寸和用途规则推导；具体型号需核对使用场景。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {
          "ordinaryScope": {
            "title": "是否为完整的电动文件复印设备？",
            "detail": "请确认不属于大型固定工业设施等排除情形，也不是以显示为主要用途的独立显示设备。",
            "yes": "是，符合以上条件",
            "no": "否或无法确认"
          }
        }
      },
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_alias_review_463",
      "name": "高拍仪",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_464",
      "name": "录像机",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_465",
      "name": "音响",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_466",
      "name": "智能语音助手",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_467",
      "name": "手环",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_468",
      "name": "手台",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能对应不同设备或非电气产品，需先核对具体产品结构、用途及适用范围，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_469",
      "name": "料理机（其他情况）",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能指不同产品，请先核对产品实际功能与形态，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_alias_review_470",
      "name": "游戏主机（其他情况）",
      "officialName": "EAR 分类及适用范围条件",
      "coverage": "review",
      "decision": {
        "mode": "review",
        "required": []
      },
      "facts": {},
      "defaults": {},
      "evidenceIds": [
        "ear_rule_ordinary_20261102"
      ],
      "presentation": {},
      "reviewReason": "special_conditions_not_covered",
      "reviewText": "该名称可能指不同产品，请先核对产品实际功能与形态，再使用条件引导或联系 EAR 复核。"
    },
    {
      "id": "p_gap_g132",
      "name": "数码相机",
      "officialName": "Digitalkamera",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
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
      "facts": {},
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_gap_g132"
          ]
        }
      },
      "evidenceIds": [
        "ear_gap_g132",
        "ear_gap_g132_camera"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 条目：Digitalkamera / Kamera",
          "EAR 将数码相机列为小型设备（Kleingeräte），不属于小型信息和通信设备",
          "带 WLAN、GPS 等功能的相机仍按小型设备归类；b2b 或 b2c 设备类型按实际使用地点选择"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_21296cdb81dfa149",
      "name": "红外加热板",
      "officialName": "Infrarot-Wärmestrahler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_21296cdb81dfa149"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_21296cdb81dfa149"
          ]
        }
      },
      "evidenceIds": [
        "ear_21296cdb81dfa149"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Infrarot-Wärmestrahler / Infrared light panel",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_48e55baf407262cd",
      "name": "电子验孕/排卵测试仪",
      "officialName": "Schwangerschaftstester (digital)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_48e55baf407262cd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_48e55baf407262cd"
          ]
        }
      },
      "evidenceIds": [
        "ear_48e55baf407262cd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schwangerschaftstester (digital) / Ovulation & Pregnancy Tester",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9109acf151f04414",
      "name": "无线网卡（WiFi 适配器）",
      "officialName": "WLAN-Adapter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9109acf151f04414"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9109acf151f04414"
          ]
        }
      },
      "evidenceIds": [
        "ear_9109acf151f04414"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：WLAN-Adapter / WiFi Stick",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_230af8cc3949201a",
      "name": "蓄热式电暖器",
      "officialName": "Nachtspeicherofen",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_230af8cc3949201a"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_230af8cc3949201a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Nachtspeicherofen / Night storage heater",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Nachtspeicherofen」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_cb16393ec98873b4",
      "name": "自动取款机",
      "officialName": "Geldautomat",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cb16393ec98873b4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_cb16393ec98873b4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Geldautomat / Cash machine",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 5 类 · 仅限专业场所使用的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Geldautomat」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e1065664f402c39d",
      "name": "便携个人报警器",
      "officialName": "Taschenalarm",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e1065664f402c39d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e1065664f402c39d"
          ]
        }
      },
      "evidenceIds": [
        "ear_e1065664f402c39d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Taschenalarm / Personal alarm",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a2263474043eab69",
      "name": "雪崩收发信机",
      "officialName": "LVS-Gerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a2263474043eab69"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a2263474043eab69"
          ]
        }
      },
      "evidenceIds": [
        "ear_a2263474043eab69"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LVS-Gerät / Avalanche transceiver",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_0fed3bbd72185cf9",
      "name": "停车缴费机",
      "officialName": "Parkscheinautomat",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0fed3bbd72185cf9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_0fed3bbd72185cf9"
          ]
        }
      },
      "evidenceIds": [
        "ear_0fed3bbd72185cf9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Parkscheinautomat / Parking ticket vending machine",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_31498d36e2e741c9",
      "name": "自动灌溉定时器",
      "officialName": "Bewässerungscomputer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_31498d36e2e741c9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_31498d36e2e741c9"
          ]
        }
      },
      "evidenceIds": [
        "ear_31498d36e2e741c9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bewässerungscomputer / Water timer for irrigation",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2aa3083080e8f46f",
      "name": "水旋流处理装置",
      "officialName": "Wasserwirbler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2aa3083080e8f46f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2aa3083080e8f46f"
          ]
        }
      },
      "evidenceIds": [
        "ear_2aa3083080e8f46f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wasserwirbler / Hexagon Water Swirl",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_878fb25058face45",
      "name": "录音磁带",
      "officialName": "Audiokassette",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_878fb25058face45"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_878fb25058face45"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Audiokassette / Audio cassette",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Audiokassette」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_4c0cf233faaf6005",
      "name": "电竞椅",
      "officialName": "Gamingsessel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4c0cf233faaf6005"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4c0cf233faaf6005"
          ]
        }
      },
      "evidenceIds": [
        "ear_4c0cf233faaf6005"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gamingsessel / Gaming Chair",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_3918f49a69d4d01e",
      "name": "电子墨水钥匙扣",
      "officialName": "E-ink-Schlüsselanhänger",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "screen",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3918f49a69d4d01e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3918f49a69d4d01e"
          ]
        }
      },
      "evidenceIds": [
        "ear_3918f49a69d4d01e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：E-ink-Schlüsselanhänger / Smart keychain",
          "EAR 候选设备类型：第 2 类 · 可用于家庭的屏幕设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5379e202f1ab8186",
      "name": "眼动追踪仪",
      "officialName": "Eye Tracker",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5379e202f1ab8186"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5379e202f1ab8186"
          ]
        }
      },
      "evidenceIds": [
        "ear_5379e202f1ab8186"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Eye Tracker / Gaming eye tracker",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_b67443f684adc3c7",
      "name": "止吠器",
      "officialName": "Anti-Bell-Gerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b67443f684adc3c7"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b67443f684adc3c7"
          ]
        }
      },
      "evidenceIds": [
        "ear_b67443f684adc3c7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Anti-Bell-Gerät / Anti barking device",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_64b54b37f07f0792",
      "name": "IPL 脱毛仪",
      "officialName": "IPL Haarentferner",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_64b54b37f07f0792"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_64b54b37f07f0792"
          ]
        }
      },
      "evidenceIds": [
        "ear_64b54b37f07f0792"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：IPL Haarentferner / IPL hair removal",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_4999403f8de44456",
      "name": "电热垫",
      "officialName": "Heizkissen",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4999403f8de44456"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4999403f8de44456"
          ]
        }
      },
      "evidenceIds": [
        "ear_4999403f8de44456"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Heizkissen / Heating pad",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9fafc967b3ff5dd7",
      "name": "超声波清洗机",
      "officialName": "Ultraschallreiniger",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9fafc967b3ff5dd7"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9fafc967b3ff5dd7"
          ]
        }
      },
      "evidenceIds": [
        "ear_9fafc967b3ff5dd7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Ultraschallreiniger / Ultrasonic cleaner",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_367d4bf175debc7d",
      "name": "智能卡",
      "officialName": "Smartcard",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_367d4bf175debc7d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_367d4bf175debc7d"
          ]
        }
      },
      "evidenceIds": [
        "ear_367d4bf175debc7d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Smartcard / Smart card",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_244dbce346507eea",
      "name": "LED 发光水龙头",
      "officialName": "LED-Wasserhahn",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_244dbce346507eea"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_244dbce346507eea"
          ]
        }
      },
      "evidenceIds": [
        "ear_244dbce346507eea"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Wasserhahn / LED Water Faucet",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ea57c76422610a16",
      "name": "华夫饼机",
      "officialName": "Waffelbackgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ea57c76422610a16"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ea57c76422610a16"
          ]
        }
      },
      "evidenceIds": [
        "ear_ea57c76422610a16"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Waffelbackgerät / Waffle maker",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8d309b979bc1fc35",
      "name": "水床加热器",
      "officialName": "Wasserbettheizung",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8d309b979bc1fc35"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_8d309b979bc1fc35"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wasserbettheizung / Waterbed heater",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Wasserbettheizung」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Flexible Geräte werden im kompaktesten Zustand (zusammengelegt/-gerollt) gemessen.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1325b6dd77fa363f",
      "name": "桑拿控制面板",
      "officialName": "Saunasteuerung",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1325b6dd77fa363f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1325b6dd77fa363f"
          ]
        }
      },
      "evidenceIds": [
        "ear_1325b6dd77fa363f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Saunasteuerung / Sauna control panel",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_dbee4f9cc121294d",
      "name": "胶片/幻灯片扫描仪",
      "officialName": "Multiscanner",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dbee4f9cc121294d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dbee4f9cc121294d"
          ]
        }
      },
      "evidenceIds": [
        "ear_dbee4f9cc121294d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Multiscanner / Film and slide scanner",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a55f3950cb97b0c1",
      "name": "游戏卡带",
      "officialName": "Spielecartridge",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a55f3950cb97b0c1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a55f3950cb97b0c1"
          ]
        }
      },
      "evidenceIds": [
        "ear_a55f3950cb97b0c1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Spielecartridge / ROM cartridge for gaming",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_3ee01e9cde87c36a",
      "name": "雷达预警器",
      "officialName": "Radarwarner",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3ee01e9cde87c36a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3ee01e9cde87c36a"
          ]
        }
      },
      "evidenceIds": [
        "ear_3ee01e9cde87c36a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Radarwarner / Radar warning equipment",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_fef526a7068b2889",
      "name": "音频转接器",
      "officialName": "Audioadapter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fef526a7068b2889"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fef526a7068b2889"
          ]
        }
      },
      "evidenceIds": [
        "ear_fef526a7068b2889"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Audioadapter / Audio adapter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_74a4249ae557a537",
      "name": "倒车雷达套装",
      "officialName": "Einparkhilfe-Set",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_74a4249ae557a537"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_74a4249ae557a537"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Einparkhilfe-Set / Beep & Park set",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Einparkhilfe-Set」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_577ea1c2724fda34",
      "name": "天然石电暖器",
      "officialName": "Natursteinheizkörper",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_577ea1c2724fda34"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_577ea1c2724fda34"
          ]
        }
      },
      "evidenceIds": [
        "ear_577ea1c2724fda34"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Natursteinheizkörper / Electric panel heater",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_045195eb28e4cda9",
      "name": "电子捕兽器",
      "officialName": "elektrische Tierfalle",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_045195eb28e4cda9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_045195eb28e4cda9"
          ]
        }
      },
      "evidenceIds": [
        "ear_045195eb28e4cda9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：elektrische Tierfalle / Electric animal trap",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6353328fbf6271ff",
      "name": "按摩椅",
      "officialName": "Massagesessel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6353328fbf6271ff"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6353328fbf6271ff"
          ]
        }
      },
      "evidenceIds": [
        "ear_6353328fbf6271ff"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Massagesessel / Massage chair",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c5d8384de5166e2c",
      "name": "接地电阻测试仪",
      "officialName": "Erdungsmessgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c5d8384de5166e2c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c5d8384de5166e2c"
          ]
        }
      },
      "evidenceIds": [
        "ear_c5d8384de5166e2c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Erdungsmessgerät / Earth resistance tester",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d12dc7bf66682038",
      "name": "电动鼓风机",
      "officialName": "Luftgebläse",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d12dc7bf66682038"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d12dc7bf66682038"
          ]
        }
      },
      "evidenceIds": [
        "ear_d12dc7bf66682038"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Luftgebläse / Air blower pump fan",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6c1234b1335e1314",
      "name": "手持无线扫描仪",
      "officialName": "Funkscanner",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6c1234b1335e1314"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6c1234b1335e1314"
          ]
        }
      },
      "evidenceIds": [
        "ear_6c1234b1335e1314"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Funkscanner / Handheld scanner",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_67f7057cd12874b6",
      "name": "倒车显示屏",
      "officialName": "Rückfahrmonitor",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "screen",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_67f7057cd12874b6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_67f7057cd12874b6"
          ]
        }
      },
      "evidenceIds": [
        "ear_67f7057cd12874b6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Rückfahrmonitor / Rear view camera monitor",
          "EAR 候选设备类型：第 2 类 · 可用于家庭的屏幕设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9fc1f01f0ef060ee",
      "name": "LED 浴室镜",
      "officialName": "LED-Badspiegel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9fc1f01f0ef060ee"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9fc1f01f0ef060ee"
          ]
        }
      },
      "evidenceIds": [
        "ear_9fc1f01f0ef060ee"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Badspiegel / Illuminated Bathroom Mirror",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9e8632b93b47b585",
      "name": "纹身机",
      "officialName": "Tätowiermaschine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9e8632b93b47b585"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9e8632b93b47b585"
          ]
        }
      },
      "evidenceIds": [
        "ear_9e8632b93b47b585"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Tätowiermaschine / Tattoo machine",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a66120e0083f818f",
      "name": "储水式热水器",
      "officialName": "Warmwasserspeicher",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "thermal",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a66120e0083f818f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a66120e0083f818f"
          ]
        }
      },
      "evidenceIds": [
        "ear_a66120e0083f818f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Warmwasserspeicher / Hot water storage tank",
          "EAR 候选设备类型：第 1 类 · 可用于家庭的温度交换设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8446158b514eb576",
      "name": "防打鼾手环",
      "officialName": "Anti-Schnarch-Armband",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8446158b514eb576"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8446158b514eb576"
          ]
        }
      },
      "evidenceIds": [
        "ear_8446158b514eb576"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Anti-Schnarch-Armband / Anti snoring device",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_4515ce976d7a9381",
      "name": "壁炉吸灰器",
      "officialName": "Aschesauger",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4515ce976d7a9381"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4515ce976d7a9381"
          ]
        }
      },
      "evidenceIds": [
        "ear_4515ce976d7a9381"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Aschesauger / Ash vacuum cleaner",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2b74d0ec8b11d199",
      "name": "网络存储器（NAS）",
      "officialName": "NAS (Network Attached Storage)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2b74d0ec8b11d199"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2b74d0ec8b11d199"
          ]
        }
      },
      "evidenceIds": [
        "ear_2b74d0ec8b11d199"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：NAS (Network Attached Storage) / NAS (Network Attached Storage)",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_becf45a1c553ee28",
      "name": "浸入式电加热棒",
      "officialName": "Tauchsieder",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_becf45a1c553ee28"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_becf45a1c553ee28"
          ]
        }
      },
      "evidenceIds": [
        "ear_becf45a1c553ee28"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Tauchsieder / Portable water heater",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_efdac2ac2a7283ef",
      "name": "太阳能集热器（无电气功能）",
      "officialName": "Solarthermie-Kollektoren (keine elektrische Funktion)",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_efdac2ac2a7283ef"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_efdac2ac2a7283ef"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Solarthermie-Kollektoren (keine elektrische Funktion) / Solar heat collectors (no electrical function)",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Solarthermie-Kollektoren (keine elektrische Funktion)」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_00d7409323320de4",
      "name": "RFID 屏蔽卡（无芯片和天线）",
      "officialName": "RFID-Blockerkarte (ohne Chip und Antenne)",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_00d7409323320de4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_00d7409323320de4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：RFID-Blockerkarte (ohne Chip und Antenne) / RFID blocker card (without antenna and chip)",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「RFID-Blockerkarte (ohne Chip und Antenne)」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_094da54ed903bbbd",
      "name": "电子指南针",
      "officialName": "Kompass, digital",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_094da54ed903bbbd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_094da54ed903bbbd"
          ]
        }
      },
      "evidenceIds": [
        "ear_094da54ed903bbbd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kompass, digital / Compass, digital",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a0da97f43296f5e6",
      "name": "墙壁照明开关",
      "officialName": "Wand-Lichtschalter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a0da97f43296f5e6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a0da97f43296f5e6"
          ]
        }
      },
      "evidenceIds": [
        "ear_a0da97f43296f5e6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wand-Lichtschalter / Light switch",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8a88116f8d5deb0b",
      "name": "自行车发电机",
      "officialName": "Dynamo für Fahrräder",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8a88116f8d5deb0b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8a88116f8d5deb0b"
          ]
        }
      },
      "evidenceIds": [
        "ear_8a88116f8d5deb0b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Dynamo für Fahrräder / Dynamo for bikes",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_61d53f5b2fc58dbe",
      "name": "收音机",
      "officialName": "Radiogerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_61d53f5b2fc58dbe"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_61d53f5b2fc58dbe"
          ]
        }
      },
      "evidenceIds": [
        "ear_61d53f5b2fc58dbe"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Radiogerät / Radio set",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2a1f3c28d9938008",
      "name": "NFC 手机壳",
      "officialName": "NFC-Handyhülle",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "screen",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2a1f3c28d9938008"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2a1f3c28d9938008"
          ]
        }
      },
      "evidenceIds": [
        "ear_2a1f3c28d9938008"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：NFC-Handyhülle / Smart Ink Phone Case",
          "EAR 候选设备类型：第 2 类 · 可用于家庭的屏幕设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_617e0f57c9e1bc93",
      "name": "触控笔",
      "officialName": "Eingabestift",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_617e0f57c9e1bc93"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_617e0f57c9e1bc93"
          ]
        }
      },
      "evidenceIds": [
        "ear_617e0f57c9e1bc93"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Eingabestift / Smart pen",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ac96221c5a5b0124",
      "name": "电子热分配表",
      "officialName": "Heizkostenverteiler, elektronisch",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ac96221c5a5b0124"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ac96221c5a5b0124"
          ]
        }
      },
      "evidenceIds": [
        "ear_ac96221c5a5b0124"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Heizkostenverteiler, elektronisch / Heat cost allocator",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_dd05cd591d5c2b19",
      "name": "电动阁楼梯",
      "officialName": "Bodentreppe, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dd05cd591d5c2b19"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dd05cd591d5c2b19"
          ]
        }
      },
      "evidenceIds": [
        "ear_dd05cd591d5c2b19"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bodentreppe, elektrisch / Attic ladder, electric",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_166f69501f322b93",
      "name": "电动充气泵",
      "officialName": "Luftpumpe, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_166f69501f322b93"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_166f69501f322b93"
          ]
        }
      },
      "evidenceIds": [
        "ear_166f69501f322b93"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Luftpumpe, elektrisch / air pump, electric",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_464f70e842077788",
      "name": "等离子球",
      "officialName": "Plasmakugel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_464f70e842077788"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_464f70e842077788"
          ]
        }
      },
      "evidenceIds": [
        "ear_464f70e842077788"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Plasmakugel / Sensitive plasma globe",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e9acf6d015eaebb4",
      "name": "信息通信延长线",
      "officialName": "ITK-Verlängerungskabel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e9acf6d015eaebb4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e9acf6d015eaebb4"
          ]
        }
      },
      "evidenceIds": [
        "ear_e9acf6d015eaebb4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：ITK-Verlängerungskabel / ITK (extension) cable",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a9c6ebf21db091bf",
      "name": "大型天线",
      "officialName": "große Antenne",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a9c6ebf21db091bf"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a9c6ebf21db091bf"
          ]
        }
      },
      "evidenceIds": [
        "ear_a9c6ebf21db091bf"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：große Antenne / large Antenna",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_87cb7575f6669619",
      "name": "暖脚器",
      "officialName": "Fußheizung",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_87cb7575f6669619"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_87cb7575f6669619"
          ]
        }
      },
      "evidenceIds": [
        "ear_87cb7575f6669619"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fußheizung / Heated foot warmer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_37dbfe72474263d0",
      "name": "磁带播放机",
      "officialName": "Kassettenspieler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_37dbfe72474263d0"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_37dbfe72474263d0"
          ]
        }
      },
      "evidenceIds": [
        "ear_37dbfe72474263d0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kassettenspieler / Cassette player",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_cd4e7700ca1ac0e7",
      "name": "真空封口机",
      "officialName": "Vakuumiergerät",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cd4e7700ca1ac0e7"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cd4e7700ca1ac0e7"
          ]
        }
      },
      "evidenceIds": [
        "ear_cd4e7700ca1ac0e7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Vakuumiergerät / Vacuum Sealer",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_044fedd3dcb52068",
      "name": "温控器",
      "officialName": "Heizregler",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_044fedd3dcb52068"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_044fedd3dcb52068"
          ]
        }
      },
      "evidenceIds": [
        "ear_044fedd3dcb52068"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Heizregler / Heating regulator",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6db04ce0d19bf1b3",
      "name": "大型计算机（主机）",
      "officialName": "Großrechner",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6db04ce0d19bf1b3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6db04ce0d19bf1b3"
          ]
        }
      },
      "evidenceIds": [
        "ear_6db04ce0d19bf1b3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Großrechner / Large computer-mainframe",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_02a32e79d67be668",
      "name": "商用咖啡机",
      "officialName": "Kaffeemaschine für Gastronomie",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_02a32e79d67be668"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_02a32e79d67be668"
          ]
        }
      },
      "evidenceIds": [
        "ear_02a32e79d67be668"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kaffeemaschine für Gastronomie / commercial coffee machine for gastronomy",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_72600a22ea5baee8",
      "name": "植入式心脏起搏器",
      "officialName": "Herzschrittmacher",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_72600a22ea5baee8"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_72600a22ea5baee8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Herzschrittmacher / Implantable pace-maker",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Herzschrittmacher」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_5736983cc4557d34",
      "name": "操作台（输入键盘）",
      "officialName": "Bedienpult (im Sinn einer Eingabetastatur)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5736983cc4557d34"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_5736983cc4557d34"
          ]
        }
      },
      "evidenceIds": [
        "ear_5736983cc4557d34"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bedienpult (im Sinn einer Eingabetastatur) / Operating desk (meaning input keypad)",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_176c6c1969f7f0c2",
      "name": "车载小型设备（即插即用型）",
      "officialName": "Kleingerät für Kfz (z.B. per Plug & Play betriebenes)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_176c6c1969f7f0c2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_176c6c1969f7f0c2"
          ]
        }
      },
      "evidenceIds": [
        "ear_176c6c1969f7f0c2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kleingerät für Kfz (z.B. per Plug & Play betriebenes) / Small appliance for cars (e.g. operated via plug & play)",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_7061c32ef3d1af48",
      "name": "RFID 屏蔽卡（含芯片或天线）",
      "officialName": "RFID-Blockerkarte (mit Chip oder Antenne)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7061c32ef3d1af48"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7061c32ef3d1af48"
          ]
        }
      },
      "evidenceIds": [
        "ear_7061c32ef3d1af48"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：RFID-Blockerkarte (mit Chip oder Antenne) / RFID blocker cards (with antenna or chip)",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_14367d410f914e0b",
      "name": "抬头显示器（HUD）",
      "officialName": "Head-Up-Display",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_14367d410f914e0b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_14367d410f914e0b"
          ]
        }
      },
      "evidenceIds": [
        "ear_14367d410f914e0b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Head-Up-Display / Head-up display",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_387c46dfc543112e",
      "name": "电动软弹枪",
      "officialName": "Softairwaffe, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_387c46dfc543112e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_387c46dfc543112e"
          ]
        }
      },
      "evidenceIds": [
        "ear_387c46dfc543112e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Softairwaffe, elektrisch / Airsoft gun, electric",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6828aac7dc249b48",
      "name": "游戏耳机",
      "officialName": "Gaming-Headset",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6828aac7dc249b48"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6828aac7dc249b48"
          ]
        }
      },
      "evidenceIds": [
        "ear_6828aac7dc249b48"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gaming-Headset / Gaming headset",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ccf7b597d127d72c",
      "name": "气象站",
      "officialName": "Wetterstation",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ccf7b597d127d72c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ccf7b597d127d72c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wetterstation / Weather station",
          "EAR 候选设备类型：第 2 类 · 可用于家庭的屏幕设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Wetterstation」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob es sich um ein Bildschirmgerät oder ein Kleingerät handelt, hängt von der Größe des Bildschirms ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_5058a105610ac4b3",
      "name": "噪音指示灯",
      "officialName": "Lärm-Ampel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5058a105610ac4b3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5058a105610ac4b3"
          ]
        }
      },
      "evidenceIds": [
        "ear_5058a105610ac4b3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Lärm-Ampel / Noise lights",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_998340959606c404",
      "name": "行车记录仪",
      "officialName": "Dashcam",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_998340959606c404"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_998340959606c404"
          ]
        }
      },
      "evidenceIds": [
        "ear_998340959606c404"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Dashcam / Dashcam",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_dee91136b65c85e4",
      "name": "沐浴水温计",
      "officialName": "Badethermometer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dee91136b65c85e4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_dee91136b65c85e4"
          ]
        }
      },
      "evidenceIds": [
        "ear_dee91136b65c85e4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Badethermometer / Shower thermometer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_258d307193ff152c",
      "name": "交通信号灯",
      "officialName": "Lichtsignalanlage",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_258d307193ff152c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_258d307193ff152c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Lichtsignalanlage / Traffic lights",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 5 类 · 仅限专业场所使用的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Lichtsignalanlage」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_46a61417b8835f66",
      "name": "卫星寻星仪",
      "officialName": "Satfinder",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_46a61417b8835f66"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_46a61417b8835f66"
          ]
        }
      },
      "evidenceIds": [
        "ear_46a61417b8835f66"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Satfinder / Satellite finder",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f715470074b5f65f",
      "name": "电子飞镖盘",
      "officialName": "Dartscheibe, elektronisch",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f715470074b5f65f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f715470074b5f65f"
          ]
        }
      },
      "evidenceIds": [
        "ear_f715470074b5f65f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Dartscheibe, elektronisch / Dartboard, electronic",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9f663169558e42ea",
      "name": "诊疗床",
      "officialName": "Behandlungsliege",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9f663169558e42ea"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_9f663169558e42ea"
          ]
        }
      },
      "evidenceIds": [
        "ear_9f663169558e42ea"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Behandlungsliege / Treatment bed",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_be28691aa56f3c28",
      "name": "智能望远镜",
      "officialName": "Smart-Teleskop",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_be28691aa56f3c28"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_be28691aa56f3c28"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Smart-Teleskop / Smart telescope",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Smart-Teleskop」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Optik mit fest integrierter Nachführung",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_7098602b4ae8e660",
      "name": "握力计",
      "officialName": "Handkraftmessgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7098602b4ae8e660"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7098602b4ae8e660"
          ]
        }
      },
      "evidenceIds": [
        "ear_7098602b4ae8e660"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Handkraftmessgerät / Grip strength trainer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5b6c950f1d508f69",
      "name": "水下推进器",
      "officialName": "Unterwasserscooter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5b6c950f1d508f69"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5b6c950f1d508f69"
          ]
        }
      },
      "evidenceIds": [
        "ear_5b6c950f1d508f69"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Unterwasserscooter / Underwater scooter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2ed62f7d2559812d",
      "name": "金属探测器",
      "officialName": "Metalldetektor",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2ed62f7d2559812d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2ed62f7d2559812d"
          ]
        }
      },
      "evidenceIds": [
        "ear_2ed62f7d2559812d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Metalldetektor / Metal detector",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e7d3fb5deacbf326",
      "name": "反渗透净水系统",
      "officialName": "Osmoseanlage",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e7d3fb5deacbf326"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e7d3fb5deacbf326"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Osmoseanlage / Osmosis system",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Osmoseanlage」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4ed2936f4731b155",
      "name": "泳池逆流训练器",
      "officialName": "Gegenstromanlage",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4ed2936f4731b155"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_4ed2936f4731b155"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gegenstromanlage / Swimming pool current machine",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Gegenstromanlage」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_1e681931046aecf5",
      "name": "超声波驱鼠器",
      "officialName": "Marderschreck",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1e681931046aecf5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1e681931046aecf5"
          ]
        }
      },
      "evidenceIds": [
        "ear_1e681931046aecf5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Marderschreck / Ultrasonic rodent repeller",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_17f8b7f42405cc14",
      "name": "厨余垃圾处理器",
      "officialName": "Küchenabfallzerkleinerer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_17f8b7f42405cc14"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_17f8b7f42405cc14"
          ]
        }
      },
      "evidenceIds": [
        "ear_17f8b7f42405cc14"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Küchenabfallzerkleinerer / Kitchen composter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e370bdd89260604a",
      "name": "风力发电机",
      "officialName": "Windgenerator",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e370bdd89260604a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e370bdd89260604a"
          ]
        }
      },
      "evidenceIds": [
        "ear_e370bdd89260604a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Windgenerator / Wind turbine generator",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d03cff568a90b52f",
      "name": "LED 气球",
      "officialName": "LED-Ballon",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d03cff568a90b52f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d03cff568a90b52f"
          ]
        }
      },
      "evidenceIds": [
        "ear_d03cff568a90b52f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Ballon / LED balloon",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_bd5969a04ddca60c",
      "name": "LED 发光项圈",
      "officialName": "LED-Leuchthalsband",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bd5969a04ddca60c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_bd5969a04ddca60c"
          ]
        }
      },
      "evidenceIds": [
        "ear_bd5969a04ddca60c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Leuchthalsband / LED collar",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_382f7de4177ecd87",
      "name": "录像带",
      "officialName": "Videokassette",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_382f7de4177ecd87"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_382f7de4177ecd87"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Videokassette / Video cassette",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Videokassette」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_217b77f174d6004f",
      "name": "硬件服务器",
      "officialName": "Hardware-Server",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "no"
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_217b77f174d6004f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_217b77f174d6004f"
          ]
        }
      },
      "evidenceIds": [
        "ear_217b77f174d6004f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hardware-Server / Hardware-Server",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备；第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5fd58a533d194529",
      "name": "居家紧急呼叫器",
      "officialName": "Hausnotruf",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5fd58a533d194529"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5fd58a533d194529"
          ]
        }
      },
      "evidenceIds": [
        "ear_5fd58a533d194529"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hausnotruf / Emergency button",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a3dc0746d3b43ce0",
      "name": "脚踏控制器",
      "officialName": "Tastaturpedal",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a3dc0746d3b43ce0"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a3dc0746d3b43ce0"
          ]
        }
      },
      "evidenceIds": [
        "ear_a3dc0746d3b43ce0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Tastaturpedal / Hands-Free studio controller",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_b8c5206c2f4f8f76",
      "name": "对讲系统",
      "officialName": "Gegensprechanlage",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b8c5206c2f4f8f76"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_b8c5206c2f4f8f76"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gegensprechanlage / Intercom system",
          "EAR 候选设备类型：第 2 类 · 可用于家庭的屏幕设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Gegensprechanlage」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob es sich um ein Bildschirmgerät oder ein Kleingerät handelt, hängt von der Größe des Bildschirms ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_17edf51344c0c71a",
      "name": "按摩器",
      "officialName": "Massagegerät",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_17edf51344c0c71a"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_17edf51344c0c71a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Massagegerät / Massager",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Massagegerät」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Flexible Geräte werden im kompaktesten Zustand (zusammengelegt/-gerollt) gemessen.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_995d64bbeb1a1d8b",
      "name": "综合治疗台",
      "officialName": "Behandlungseinheit",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_995d64bbeb1a1d8b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_995d64bbeb1a1d8b"
          ]
        }
      },
      "evidenceIds": [
        "ear_995d64bbeb1a1d8b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Behandlungseinheit / treatment unit",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1eae156cb4f87db3",
      "name": "酒精呼气测试仪",
      "officialName": "Atemtester",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1eae156cb4f87db3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1eae156cb4f87db3"
          ]
        }
      },
      "evidenceIds": [
        "ear_1eae156cb4f87db3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Atemtester / Breathalyzer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8831c13fdc4989df",
      "name": "血液电疗仪",
      "officialName": "Blutzapper",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8831c13fdc4989df"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8831c13fdc4989df"
          ]
        }
      },
      "evidenceIds": [
        "ear_8831c13fdc4989df"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Blutzapper / blood zapper",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_714f63fa932528f2",
      "name": "脱毛蜡疗机",
      "officialName": "Wachsstation",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_714f63fa932528f2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_714f63fa932528f2"
          ]
        }
      },
      "evidenceIds": [
        "ear_714f63fa932528f2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wachsstation / Waxing kit",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c4452e04fec4abb2",
      "name": "驱鼹鼠器",
      "officialName": "Maulwurfvertreiber",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c4452e04fec4abb2"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c4452e04fec4abb2"
          ]
        }
      },
      "evidenceIds": [
        "ear_c4452e04fec4abb2"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Maulwurfvertreiber / Mole repellent",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_907ccd9d3bd94589",
      "name": "离子水机",
      "officialName": "Wasserionisator",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_907ccd9d3bd94589"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_907ccd9d3bd94589"
          ]
        }
      },
      "evidenceIds": [
        "ear_907ccd9d3bd94589"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wasserionisator / Water ionizer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_56dad26c14e8e81a",
      "name": "DVI 线",
      "officialName": "DVI-Kabel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_56dad26c14e8e81a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_56dad26c14e8e81a"
          ]
        }
      },
      "evidenceIds": [
        "ear_56dad26c14e8e81a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：DVI-Kabel / DVI cable",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f2a533b3d2e2c77a",
      "name": "地面打磨机",
      "officialName": "Bodenschleifmaschine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f2a533b3d2e2c77a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_f2a533b3d2e2c77a"
          ]
        }
      },
      "evidenceIds": [
        "ear_f2a533b3d2e2c77a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bodenschleifmaschine / Floor grinding machine",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5c804ff598fa0b4d",
      "name": "抛光机",
      "officialName": "Poliermaschine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5c804ff598fa0b4d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5c804ff598fa0b4d"
          ]
        }
      },
      "evidenceIds": [
        "ear_5c804ff598fa0b4d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Poliermaschine / Polishing machine",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_190c26f8248797f4",
      "name": "厨师机（多功能料理机）",
      "officialName": "Küchenmaschine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_190c26f8248797f4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_190c26f8248797f4"
          ]
        }
      },
      "evidenceIds": [
        "ear_190c26f8248797f4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Küchenmaschine / Kitchen machine",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_59e141f57b51b814",
      "name": "SIM 卡",
      "officialName": "SIM-Karte",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_59e141f57b51b814"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_59e141f57b51b814"
          ]
        }
      },
      "evidenceIds": [
        "ear_59e141f57b51b814"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：SIM-Karte / SIM card",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_0fd2948f90f13096",
      "name": "汽车搭电线",
      "officialName": "Starthilfekabel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0fd2948f90f13096"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0fd2948f90f13096"
          ]
        }
      },
      "evidenceIds": [
        "ear_0fd2948f90f13096"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Starthilfekabel / Jumper cable",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_db1fbcfa5084967c",
      "name": "智能电表传感器",
      "officialName": "Smarter Stromzählersensor",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_db1fbcfa5084967c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_db1fbcfa5084967c"
          ]
        }
      },
      "evidenceIds": [
        "ear_db1fbcfa5084967c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Smarter Stromzählersensor / WiFi Smart Meter",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_0d18345fd4bb6cfa",
      "name": "触屏收银系统",
      "officialName": "Touchscreen-Kassensystem",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "screen",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0d18345fd4bb6cfa"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_0d18345fd4bb6cfa"
          ]
        }
      },
      "evidenceIds": [
        "ear_0d18345fd4bb6cfa"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Touchscreen-Kassensystem / Touchscreen cash register",
          "EAR 候选设备类型：第 2 类 · 仅限专业场所使用的屏幕设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_bd8d0852b8e4956b",
      "name": "反窃听探测器",
      "officialName": "Wanzenfinder",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bd8d0852b8e4956b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_bd8d0852b8e4956b"
          ]
        }
      },
      "evidenceIds": [
        "ear_bd8d0852b8e4956b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wanzenfinder / Anti Spy Detector",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_0c4dfdd808f27f50",
      "name": "接线端子",
      "officialName": "Kabelschuh",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0c4dfdd808f27f50"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_0c4dfdd808f27f50"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kabelschuh / Crimp Terminal",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Kabelschuh」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_cf76481bd0d8bfc0",
      "name": "无线充电器（Qi）",
      "officialName": "Qi-Ladegerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cf76481bd0d8bfc0"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cf76481bd0d8bfc0"
          ]
        }
      },
      "evidenceIds": [
        "ear_cf76481bd0d8bfc0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Qi-Ladegerät / wireless charger",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_b060aa7e7bde0464",
      "name": "3D 扫描仪",
      "officialName": "3D-Scanner",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b060aa7e7bde0464"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b060aa7e7bde0464"
          ]
        }
      },
      "evidenceIds": [
        "ear_b060aa7e7bde0464"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：3D-Scanner / 3D scanner",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_b2d131a380cb530f",
      "name": "断路器",
      "officialName": "Leitungsschutzschalter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b2d131a380cb530f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b2d131a380cb530f"
          ]
        }
      },
      "evidenceIds": [
        "ear_b2d131a380cb530f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Leitungsschutzschalter / Circuit breaker",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f80cd3fe5a04ecf4",
      "name": "墙壁插座",
      "officialName": "Wand-Steckdose",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f80cd3fe5a04ecf4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f80cd3fe5a04ecf4"
          ]
        }
      },
      "evidenceIds": [
        "ear_f80cd3fe5a04ecf4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wand-Steckdose / Wall Socket",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c596e1a03916b297",
      "name": "软水机",
      "officialName": "Wasserenthärter",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c596e1a03916b297"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c596e1a03916b297"
          ]
        }
      },
      "evidenceIds": [
        "ear_c596e1a03916b297"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wasserenthärter / Water softener",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d23a01ee3b29869e",
      "name": "白炽灯泡",
      "officialName": "Glühlampe",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d23a01ee3b29869e"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d23a01ee3b29869e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Glühlampe / Filament bulb",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Glühlampe」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_5d15b1f45e7d76c5",
      "name": "继电器",
      "officialName": "Relais",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5d15b1f45e7d76c5"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_5d15b1f45e7d76c5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Relais / relay",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Relais」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_21a6d1122f946ab9",
      "name": "缝纫机",
      "officialName": "Nähmaschine",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_21a6d1122f946ab9"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_21a6d1122f946ab9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Nähmaschine / Sewing Machine",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Nähmaschine」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_dc16e95f6546b347",
      "name": "燃气壁挂炉",
      "officialName": "Gastherme",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dc16e95f6546b347"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_dc16e95f6546b347"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gastherme / Gas boiler",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Gastherme」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_4310c4cfd039170a",
      "name": "电子烟",
      "officialName": "E-Zigarette",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4310c4cfd039170a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4310c4cfd039170a"
          ]
        }
      },
      "evidenceIds": [
        "ear_4310c4cfd039170a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：E-Zigarette / Electronic cigarette",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5171ce75f99283bd",
      "name": "导航仪",
      "officialName": "Navigationsgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5171ce75f99283bd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5171ce75f99283bd"
          ]
        }
      },
      "evidenceIds": [
        "ear_5171ce75f99283bd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Navigationsgerät / Navigation device",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_09b879a1c8585c97",
      "name": "LED 灯",
      "officialName": "LED-Lampe",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "lamp",
            "household": "no"
          },
          {
            "kind": "lamp",
            "household": "yes"
          }
        ],
        "fixedSmall": false
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_09b879a1c8585c97"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_09b879a1c8585c97"
          ]
        }
      },
      "evidenceIds": [
        "ear_09b879a1c8585c97"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Lampe / LED lamp",
          "EAR 候选设备类型：第 3 类 · 仅限专业场所使用的灯；第 3 类 · 可用于家庭的非气体放电灯",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_084c99278df28142",
      "name": "平衡车",
      "officialName": "Hoverboard",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_084c99278df28142"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_084c99278df28142"
          ]
        }
      },
      "evidenceIds": [
        "ear_084c99278df28142"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hoverboard / Hoverboard",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_395b5b2cf5789e3d",
      "name": "投影幕布",
      "officialName": "Projektionsleinwand",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_395b5b2cf5789e3d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_395b5b2cf5789e3d"
          ]
        }
      },
      "evidenceIds": [
        "ear_395b5b2cf5789e3d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Projektionsleinwand / Projector screen",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c41957feb802c29a",
      "name": "电热炉盘",
      "officialName": "Kochplatte",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c41957feb802c29a"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c41957feb802c29a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kochplatte / Hot plate",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Kochplatte」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_8e854da51408f737",
      "name": "天线",
      "officialName": "Antenne",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8e854da51408f737"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_8e854da51408f737"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Antenne / Antenna",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备；不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Antenne」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Antennen, die z.B. für Unterhaltungselektronik (Radio/TV) genutzt werden. Eigenständige bzw. einzeln angebotene Antennen sind registrierungspflichtig. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_3b292f3136f607ae",
      "name": "祛痘笔",
      "officialName": "Anti-Akne-Stift",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3b292f3136f607ae"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3b292f3136f607ae"
          ]
        }
      },
      "evidenceIds": [
        "ear_3b292f3136f607ae"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Anti-Akne-Stift / Anti-acne pen",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6e938530247426f0",
      "name": "电动自行车架",
      "officialName": "Fahrradträger, elektrisch",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6e938530247426f0"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6e938530247426f0"
          ]
        }
      },
      "evidenceIds": [
        "ear_6e938530247426f0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fahrradträger, elektrisch / Bike rack, electric",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9b4bf058722d40c9",
      "name": "电源适配器（不含电脑电源）",
      "officialName": "Netzteil, außer PC-Netzteil",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9b4bf058722d40c9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9b4bf058722d40c9"
          ]
        }
      },
      "evidenceIds": [
        "ear_9b4bf058722d40c9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Netzteil, außer PC-Netzteil / AC adapter, except power supply of personal computers",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9c1114c69621cd62",
      "name": "电动猫砂盆",
      "officialName": "Katzentoilette",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9c1114c69621cd62"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9c1114c69621cd62"
          ]
        }
      },
      "evidenceIds": [
        "ear_9c1114c69621cd62"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Katzentoilette / Cat litter tray",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_4c40acf9b4c3fe2f",
      "name": "激光测距仪",
      "officialName": "Laser-Entfernungsmesser",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4c40acf9b4c3fe2f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4c40acf9b4c3fe2f"
          ]
        }
      },
      "evidenceIds": [
        "ear_4c40acf9b4c3fe2f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Laser-Entfernungsmesser / Laser measure device",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c5b994b57472c5a1",
      "name": "警报器",
      "officialName": "Alarmsirene",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c5b994b57472c5a1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c5b994b57472c5a1"
          ]
        }
      },
      "evidenceIds": [
        "ear_c5b994b57472c5a1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Alarmsirene / Security siren",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9d536109d90ef597",
      "name": "家庭报警系统",
      "officialName": "Hausalarm",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9d536109d90ef597"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9d536109d90ef597"
          ]
        }
      },
      "evidenceIds": [
        "ear_9d536109d90ef597"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hausalarm / Home alarm system",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_fc0fe56db42a822b",
      "name": "数显角度尺",
      "officialName": "Winkelmesser, digital",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fc0fe56db42a822b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fc0fe56db42a822b"
          ]
        }
      },
      "evidenceIds": [
        "ear_fc0fe56db42a822b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Winkelmesser, digital / Angle finder, digital",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d2ef48deea2269a9",
      "name": "验电笔",
      "officialName": "Spannungsprüfer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d2ef48deea2269a9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d2ef48deea2269a9"
          ]
        }
      },
      "evidenceIds": [
        "ear_d2ef48deea2269a9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Spannungsprüfer / Voltage tester",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_aa1f9e57633b6e5b",
      "name": "电动招财猫",
      "officialName": "Winkekatze",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_aa1f9e57633b6e5b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_aa1f9e57633b6e5b"
          ]
        }
      },
      "evidenceIds": [
        "ear_aa1f9e57633b6e5b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Winkekatze / Waving cat",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e44d8f175999637a",
      "name": "自动洗牌机",
      "officialName": "Kartenmischmaschine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e44d8f175999637a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e44d8f175999637a"
          ]
        }
      },
      "evidenceIds": [
        "ear_e44d8f175999637a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kartenmischmaschine / Automatic card shuffler",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_4394f7d9c200f97e",
      "name": "烫钻器",
      "officialName": "Strasskolben",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_4394f7d9c200f97e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_4394f7d9c200f97e"
          ]
        }
      },
      "evidenceIds": [
        "ear_4394f7d9c200f97e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Strasskolben / Hotfix applicator",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5036ddc2a1a6470e",
      "name": "LED 手持灯笼棒",
      "officialName": "Laternenstab mit LED",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5036ddc2a1a6470e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5036ddc2a1a6470e"
          ]
        }
      },
      "evidenceIds": [
        "ear_5036ddc2a1a6470e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Laternenstab mit LED / Handheld lantern",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_cdae27a63e779cac",
      "name": "投影机灯泡（LED）",
      "officialName": "Beamerlampe (LED)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "gas",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cdae27a63e779cac"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cdae27a63e779cac"
          ]
        }
      },
      "evidenceIds": [
        "ear_cdae27a63e779cac"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Beamerlampe (LED) / Projector lamp (LED)",
          "EAR 候选设备类型：第 3 类 · 可用于家庭的气体放电灯",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1ee35cc7f1ff77ed",
      "name": "工业相机",
      "officialName": "Industriekamera",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1ee35cc7f1ff77ed"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_1ee35cc7f1ff77ed"
          ]
        }
      },
      "evidenceIds": [
        "ear_1ee35cc7f1ff77ed"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Industriekamera / Industrial camera",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_45a94ca174cc51b9",
      "name": "臭氧发生器",
      "officialName": "Ozongenerator",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_45a94ca174cc51b9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_45a94ca174cc51b9"
          ]
        }
      },
      "evidenceIds": [
        "ear_45a94ca174cc51b9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Ozongenerator / Ozone generator",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6ab585f07b0e1f64",
      "name": "生物共振分析仪",
      "officialName": "Bioresonanzgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6ab585f07b0e1f64"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6ab585f07b0e1f64"
          ]
        }
      },
      "evidenceIds": [
        "ear_6ab585f07b0e1f64"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bioresonanzgerät / Bio resonance analyzer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_279484979622218b",
      "name": "航空耳机",
      "officialName": "Headset für Piloten",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_279484979622218b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_279484979622218b"
          ]
        }
      },
      "evidenceIds": [
        "ear_279484979622218b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Headset für Piloten / Aviation headset",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_20f2c74091f859a8",
      "name": "电动切片机",
      "officialName": "Allesschneider",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_20f2c74091f859a8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_20f2c74091f859a8"
          ]
        }
      },
      "evidenceIds": [
        "ear_20f2c74091f859a8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Allesschneider / Food slicer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_830f283d210b27ab",
      "name": "宠物芯片读取器",
      "officialName": "Chiplesegerät Haustier",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_830f283d210b27ab"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_830f283d210b27ab"
          ]
        }
      },
      "evidenceIds": [
        "ear_830f283d210b27ab"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Chiplesegerät Haustier / Pet microchip scanner",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_78c9c8dc1e13250a",
      "name": "全向会议麦克风",
      "officialName": "Konferenzspinne",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_78c9c8dc1e13250a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_78c9c8dc1e13250a"
          ]
        }
      },
      "evidenceIds": [
        "ear_78c9c8dc1e13250a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Konferenzspinne / Omnidirectional Conference Speaker",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_069ec02245353dbb",
      "name": "微动开关",
      "officialName": "Mikroschalter",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_069ec02245353dbb"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_069ec02245353dbb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Mikroschalter / Micro switch",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Mikroschalter」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_7e08b2236a81f74b",
      "name": "HDMI 转接器",
      "officialName": "HDMI-Adapter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7e08b2236a81f74b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7e08b2236a81f74b"
          ]
        }
      },
      "evidenceIds": [
        "ear_7e08b2236a81f74b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：HDMI-Adapter / HDMI adapter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9fedf8a5592c87c6",
      "name": "汽车中控锁",
      "officialName": "Zentralverriegelung Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9fedf8a5592c87c6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_9fedf8a5592c87c6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Zentralverriegelung Kfz / Central locking (automotive)",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Zentralverriegelung Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_acd3e0a2712eccc8",
      "name": "汽车继电器",
      "officialName": "Kfz-Relais",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_acd3e0a2712eccc8"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_acd3e0a2712eccc8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kfz-Relais / Relay (automotive)",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Kfz-Relais」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_798e261cb9f3b5bc",
      "name": "健康手环",
      "officialName": "Gesundheitsarmband",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_798e261cb9f3b5bc"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_798e261cb9f3b5bc"
          ]
        }
      },
      "evidenceIds": [
        "ear_798e261cb9f3b5bc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gesundheitsarmband / Health watch",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_27c316cf678cc968",
      "name": "可穿戴设备",
      "officialName": "Wearable",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_27c316cf678cc968"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_27c316cf678cc968"
          ]
        }
      },
      "evidenceIds": [
        "ear_27c316cf678cc968"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wearable / Wearable",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_0bc4b60b4f60ef3a",
      "name": "电话转接器",
      "officialName": "Telefonadapter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0bc4b60b4f60ef3a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0bc4b60b4f60ef3a"
          ]
        }
      },
      "evidenceIds": [
        "ear_0bc4b60b4f60ef3a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Telefonadapter / Telephone Socket Adapter",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9ed6b57b3db24840",
      "name": "加油机",
      "officialName": "Zapfsäule",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9ed6b57b3db24840"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_9ed6b57b3db24840"
          ]
        }
      },
      "evidenceIds": [
        "ear_9ed6b57b3db24840"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Zapfsäule / Petrol pump",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_aa01a6a63a5958ea",
      "name": "停车场道闸",
      "officialName": "Parkplatzschranke",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_aa01a6a63a5958ea"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_aa01a6a63a5958ea"
          ]
        }
      },
      "evidenceIds": [
        "ear_aa01a6a63a5958ea"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Parkplatzschranke / Parking system",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f7500b95d096b979",
      "name": "保险柜",
      "officialName": "Tresor",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f7500b95d096b979"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_f7500b95d096b979"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Tresor / Vault",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Tresor」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ein Tresor ist insgesamt registrierungspflichtig, wenn er fest integrierte elektrische Funktionen enthält. Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_92f7bbf3566fec0e",
      "name": "体温计",
      "officialName": "Fieberthermometer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_92f7bbf3566fec0e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_92f7bbf3566fec0e"
          ]
        }
      },
      "evidenceIds": [
        "ear_92f7bbf3566fec0e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fieberthermometer / Medical thermometer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_41f35c4f6717faaa",
      "name": "VR 眼镜",
      "officialName": "VR-Brille",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_41f35c4f6717faaa"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_41f35c4f6717faaa"
          ]
        }
      },
      "evidenceIds": [
        "ear_41f35c4f6717faaa"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：VR-Brille / VR Headset",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f65e289096562285",
      "name": "池塘造雾器",
      "officialName": "Teichnebler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f65e289096562285"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f65e289096562285"
          ]
        }
      },
      "evidenceIds": [
        "ear_f65e289096562285"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Teichnebler / Mist maker fogger",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_be0fae3873cb2396",
      "name": "录音笔",
      "officialName": "Diktiergerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_be0fae3873cb2396"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_be0fae3873cb2396"
          ]
        }
      },
      "evidenceIds": [
        "ear_be0fae3873cb2396"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Diktiergerät / Digital voice recorder",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ffc4189bf71bf805",
      "name": "热量表",
      "officialName": "Wärmemengenzähler WMZ",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ffc4189bf71bf805"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ffc4189bf71bf805"
          ]
        }
      },
      "evidenceIds": [
        "ear_ffc4189bf71bf805"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wärmemengenzähler WMZ / heat meter",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_eb3a936776ba97a4",
      "name": "汽车遥控钥匙",
      "officialName": "Funkschlüssel Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eb3a936776ba97a4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_eb3a936776ba97a4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Funkschlüssel Kfz / Remote car key",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Funkschlüssel Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_39ad89ea4dea533f",
      "name": "UV 光疗灯（美甲）",
      "officialName": "UV-Lichthärtegerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_39ad89ea4dea533f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_39ad89ea4dea533f"
          ]
        }
      },
      "evidenceIds": [
        "ear_39ad89ea4dea533f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：UV-Lichthärtegerät / UV nail dryer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d8174be91c2ce783",
      "name": "闹钟",
      "officialName": "Wecker",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d8174be91c2ce783"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d8174be91c2ce783"
          ]
        }
      },
      "evidenceIds": [
        "ear_d8174be91c2ce783"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wecker / Alarm clock",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_06b55c18c97943d7",
      "name": "电焊机",
      "officialName": "Schweißgerät",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_06b55c18c97943d7"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_06b55c18c97943d7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schweißgerät / Welding machine",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Schweißgerät」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_24012c0ef770fe19",
      "name": "烘手器",
      "officialName": "Händetrockner",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_24012c0ef770fe19"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_24012c0ef770fe19"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Händetrockner / Hand dryer",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Händetrockner」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e6c8c698d249fe6c",
      "name": "条件接收模块（CI 模块）",
      "officialName": "CI-Modul",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e6c8c698d249fe6c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e6c8c698d249fe6c"
          ]
        }
      },
      "evidenceIds": [
        "ear_e6c8c698d249fe6c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：CI-Modul / Common Interface module",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_683dbdc66f572ed9",
      "name": "电动电视沙发椅",
      "officialName": "Fernsehsessel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_683dbdc66f572ed9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_683dbdc66f572ed9"
          ]
        }
      },
      "evidenceIds": [
        "ear_683dbdc66f572ed9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fernsehsessel / TV armchair",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c60a713842b14bbe",
      "name": "通风设备",
      "officialName": "Lüftungsgerät",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c60a713842b14bbe"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_c60a713842b14bbe"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Lüftungsgerät / Ventilation equipment",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Lüftungsgerät」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Keine Ausnahme, kein ortsfestes Großgerät.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_2afe5e571f6a4537",
      "name": "熔断器",
      "officialName": "Schmelzsicherung",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2afe5e571f6a4537"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2afe5e571f6a4537"
          ]
        }
      },
      "evidenceIds": [
        "ear_2afe5e571f6a4537"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schmelzsicherung / Safety fuse",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_205f62373e5788ba",
      "name": "车内照明灯",
      "officialName": "Innenbeleuchtung Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_205f62373e5788ba"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_205f62373e5788ba"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Innenbeleuchtung Kfz / Car interior lighting",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Innenbeleuchtung Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_b5f8dbfedcc03ce6",
      "name": "发电机",
      "officialName": "Stromerzeuger",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b5f8dbfedcc03ce6"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_b5f8dbfedcc03ce6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Stromerzeuger / Generator",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Stromerzeuger」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_cc6eaaf50e7636c5",
      "name": "CD/DVD/MP3 播放器",
      "officialName": "CD-/DVD-/MP3-Spieler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cc6eaaf50e7636c5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cc6eaaf50e7636c5"
          ]
        }
      },
      "evidenceIds": [
        "ear_cc6eaaf50e7636c5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：CD-/DVD-/MP3-Spieler / CD/DVD/MP3 player",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2456183780794ce7",
      "name": "医用电脑",
      "officialName": "medizinischer PC",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2456183780794ce7"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_2456183780794ce7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：medizinischer PC / Medical PC",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「medizinischer PC」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Kleine ITK oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ce4216a47f6126dc",
      "name": "工业电脑",
      "officialName": "Industrie-PC",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ce4216a47f6126dc"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ce4216a47f6126dc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Industrie-PC / Industrial PC",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Industrie-PC」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Kleine ITK oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_da4bf1ce04e9ccc4",
      "name": "电热膜",
      "officialName": "Heizfolie",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_da4bf1ce04e9ccc4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_da4bf1ce04e9ccc4"
          ]
        }
      },
      "evidenceIds": [
        "ear_da4bf1ce04e9ccc4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Heizfolie / Heating foil",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_33871f3e3e8e6586",
      "name": "加热设备",
      "officialName": "Heizgerät",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_33871f3e3e8e6586"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_33871f3e3e8e6586"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Heizgerät / Heating equipment",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Heizgerät」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_26026e0e23212a44",
      "name": "食品加工/包装用制冷设备",
      "officialName": "Kühlgerät zur Lebensmittelverpackung/-verarbeitung",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "thermal",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_26026e0e23212a44"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_26026e0e23212a44"
          ]
        }
      },
      "evidenceIds": [
        "ear_26026e0e23212a44"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kühlgerät zur Lebensmittelverpackung/-verarbeitung / Cooling appliance for food packaging/processing",
          "EAR 候选设备类型：第 1 类 · 仅限专业场所使用的温度交换设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_16346ea21e070d49",
      "name": "太阳能充电控制器",
      "officialName": "Laderegler Solar",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_16346ea21e070d49"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_16346ea21e070d49"
          ]
        }
      },
      "evidenceIds": [
        "ear_16346ea21e070d49"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Laderegler Solar / Charge controller, solar",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ae7f0149092b402b",
      "name": "充电式扫地机",
      "officialName": "Akku-Kehrmaschine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ae7f0149092b402b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ae7f0149092b402b"
          ]
        }
      },
      "evidenceIds": [
        "ear_ae7f0149092b402b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Akku-Kehrmaschine / Electric push sweeper",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1d1a0db2b6244897",
      "name": "多功能电煎锅",
      "officialName": "Multifunktionspfanne",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1d1a0db2b6244897"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1d1a0db2b6244897"
          ]
        }
      },
      "evidenceIds": [
        "ear_1d1a0db2b6244897"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Multifunktionspfanne / Multi-Function Electric Cooker Pan",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_cf76a6d9d0c7595b",
      "name": "摩托头盔蓝牙耳机",
      "officialName": "Bluetooth Headset für Motorradfahrer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cf76a6d9d0c7595b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cf76a6d9d0c7595b"
          ]
        }
      },
      "evidenceIds": [
        "ear_cf76a6d9d0c7595b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bluetooth Headset für Motorradfahrer / Motorcycle helmet speaker",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5630b9966e5b134f",
      "name": "自行车附加电气装置",
      "officialName": "Anbaugerät für Fahrräder",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5630b9966e5b134f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5630b9966e5b134f"
          ]
        }
      },
      "evidenceIds": [
        "ear_5630b9966e5b134f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Anbaugerät für Fahrräder / Auxiliary product for bicycles",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e11b44fa324b0c59",
      "name": "蒸汽淋浴房",
      "officialName": "Dampfdusche",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e11b44fa324b0c59"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e11b44fa324b0c59"
          ]
        }
      },
      "evidenceIds": [
        "ear_e11b44fa324b0c59"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Dampfdusche / Steam shower",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_53262e58e0606f58",
      "name": "激光笔",
      "officialName": "Laserpointer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_53262e58e0606f58"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_53262e58e0606f58"
          ]
        }
      },
      "evidenceIds": [
        "ear_53262e58e0606f58"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Laserpointer / Laser pointer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a107bdf6ad25d473",
      "name": "LED 灯箱",
      "officialName": "LED-Leuchtplatte",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a107bdf6ad25d473"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a107bdf6ad25d473"
          ]
        }
      },
      "evidenceIds": [
        "ear_a107bdf6ad25d473"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Leuchtplatte / LED light box",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c22b0c8147ad2e30",
      "name": "磁力搅拌器",
      "officialName": "Magnetrührer",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c22b0c8147ad2e30"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c22b0c8147ad2e30"
          ]
        }
      },
      "evidenceIds": [
        "ear_c22b0c8147ad2e30"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Magnetrührer / Magnetic stirrer",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f77f3e9e336299a5",
      "name": "测速仪",
      "officialName": "Geschwindigkeitsmessgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f77f3e9e336299a5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f77f3e9e336299a5"
          ]
        }
      },
      "evidenceIds": [
        "ear_f77f3e9e336299a5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Geschwindigkeitsmessgerät / Speed Radar",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d22ec4784c9c5eac",
      "name": "医用监视器",
      "officialName": "medizinischer Monitor",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "screen",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d22ec4784c9c5eac"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_d22ec4784c9c5eac"
          ]
        }
      },
      "evidenceIds": [
        "ear_d22ec4784c9c5eac"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：medizinischer Monitor / Medical monitor",
          "EAR 候选设备类型：第 2 类 · 仅限专业场所使用的屏幕设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d7021d94443061fa",
      "name": "电动美甲打磨机",
      "officialName": "Nagelfräser",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d7021d94443061fa"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d7021d94443061fa"
          ]
        }
      },
      "evidenceIds": [
        "ear_d7021d94443061fa"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Nagelfräser / Nail drill",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_85854bb6b9b6cbcc",
      "name": "电磁场测试仪",
      "officialName": "EMF-Messgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_85854bb6b9b6cbcc"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_85854bb6b9b6cbcc"
          ]
        }
      },
      "evidenceIds": [
        "ear_85854bb6b9b6cbcc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：EMF-Messgerät / EMF meter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2d7dcbd0bab368dc",
      "name": "工业笔记本电脑",
      "officialName": "Industrie-Notebook",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "screen",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2d7dcbd0bab368dc"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_2d7dcbd0bab368dc"
          ]
        }
      },
      "evidenceIds": [
        "ear_2d7dcbd0bab368dc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Industrie-Notebook / Industrial notebook",
          "EAR 候选设备类型：第 2 类 · 仅限专业场所使用的屏幕设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_3f07abc8651b6bbc",
      "name": "实验室稳压电源",
      "officialName": "Labornetzgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3f07abc8651b6bbc"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_3f07abc8651b6bbc"
          ]
        }
      },
      "evidenceIds": [
        "ear_3f07abc8651b6bbc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Labornetzgerät / Switching power supply",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2f3306c3719e3bfc",
      "name": "除颤器",
      "officialName": "Defibrillator",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2f3306c3719e3bfc"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2f3306c3719e3bfc"
          ]
        }
      },
      "evidenceIds": [
        "ear_2f3306c3719e3bfc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Defibrillator / Defibrillator",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a036d8346e1fef08",
      "name": "喷笔气泵",
      "officialName": "Airbrushkompressor",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a036d8346e1fef08"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a036d8346e1fef08"
          ]
        }
      },
      "evidenceIds": [
        "ear_a036d8346e1fef08"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Airbrushkompressor / Airbrush compressor",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9b796ee26028e4da",
      "name": "手持停车示意牌",
      "officialName": "Anhaltestab",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9b796ee26028e4da"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9b796ee26028e4da"
          ]
        }
      },
      "evidenceIds": [
        "ear_9b796ee26028e4da"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Anhaltestab / Handheld stop sign for safety",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2a813922a618466c",
      "name": "助眠仪（白噪音机）",
      "officialName": "Einschlafhilfe",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2a813922a618466c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2a813922a618466c"
          ]
        }
      },
      "evidenceIds": [
        "ear_2a813922a618466c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Einschlafhilfe / Sleep Sound Machine",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8095970412f42c57",
      "name": "翻译机",
      "officialName": "Sprachübersetzer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8095970412f42c57"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8095970412f42c57"
          ]
        }
      },
      "evidenceIds": [
        "ear_8095970412f42c57"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Sprachübersetzer / Language translator",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e21c10e5033807cb",
      "name": "自行车锁",
      "officialName": "Fahrradschloss",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e21c10e5033807cb"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e21c10e5033807cb"
          ]
        }
      },
      "evidenceIds": [
        "ear_e21c10e5033807cb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fahrradschloss / bicycle lock",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_7a1ec2e215cd9f0d",
      "name": "蓝牙适配器",
      "officialName": "Bluetooth-Adapter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7a1ec2e215cd9f0d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7a1ec2e215cd9f0d"
          ]
        }
      },
      "evidenceIds": [
        "ear_7a1ec2e215cd9f0d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bluetooth-Adapter / Bluetooth dongle",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_7ccc808c5f29bb9b",
      "name": "桌面流水摆件",
      "officialName": "Zimmerbrunnen",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7ccc808c5f29bb9b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7ccc808c5f29bb9b"
          ]
        }
      },
      "evidenceIds": [
        "ear_7ccc808c5f29bb9b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Zimmerbrunnen / Tabletop fountain",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f5b83857ee5f01cb",
      "name": "硬盘盒",
      "officialName": "Festplattengehäuse",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f5b83857ee5f01cb"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f5b83857ee5f01cb"
          ]
        }
      },
      "evidenceIds": [
        "ear_f5b83857ee5f01cb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Festplattengehäuse / Hard Drive Enclosure",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_81ac1c8f006efdb3",
      "name": "巧克力喷泉机",
      "officialName": "Schokobrunnen",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_81ac1c8f006efdb3"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_81ac1c8f006efdb3"
          ]
        }
      },
      "evidenceIds": [
        "ear_81ac1c8f006efdb3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schokobrunnen / Chocolate fountain",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_0baebce22206b829",
      "name": "蒸馏水机",
      "officialName": "Wasserdestilliergerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0baebce22206b829"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0baebce22206b829"
          ]
        }
      },
      "evidenceIds": [
        "ear_0baebce22206b829"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wasserdestilliergerät / Water distiller",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_aac288ce2ea8f503",
      "name": "电动榨汁机",
      "officialName": "Saftpresse",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_aac288ce2ea8f503"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_aac288ce2ea8f503"
          ]
        }
      },
      "evidenceIds": [
        "ear_aac288ce2ea8f503"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Saftpresse / Electric juicer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d6a74092a82695cb",
      "name": "存储卡",
      "officialName": "Speicherkarte",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d6a74092a82695cb"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d6a74092a82695cb"
          ]
        }
      },
      "evidenceIds": [
        "ear_d6a74092a82695cb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Speicherkarte / Memory card",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9aa47cb9692143bc",
      "name": "棉花糖机",
      "officialName": "Zuckerwattemaschine",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9aa47cb9692143bc"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_9aa47cb9692143bc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Zuckerwattemaschine / cotton candy maker",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Zuckerwattemaschine」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_0604260a0ec8e160",
      "name": "劈木机",
      "officialName": "Holzspalter",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0604260a0ec8e160"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0604260a0ec8e160"
          ]
        }
      },
      "evidenceIds": [
        "ear_0604260a0ec8e160"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Holzspalter / Log splitter",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_da186736c3d50f56",
      "name": "制动电阻",
      "officialName": "Bremswiderstand",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_da186736c3d50f56"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_da186736c3d50f56"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bremswiderstand / Braking resistor",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Bremswiderstand」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_41b89d10619cdd3e",
      "name": "蓝牙信标（Beacon）",
      "officialName": "Beacon",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_41b89d10619cdd3e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_41b89d10619cdd3e"
          ]
        }
      },
      "evidenceIds": [
        "ear_41b89d10619cdd3e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Beacon / Beacon",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_b028a01917a1be53",
      "name": "十字线激光水平仪",
      "officialName": "Kreuzlinienlaser",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b028a01917a1be53"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b028a01917a1be53"
          ]
        }
      },
      "evidenceIds": [
        "ear_b028a01917a1be53"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kreuzlinienlaser / Cross line Laser",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_153e76f76811ccdd",
      "name": "转轮除湿机",
      "officialName": "Adsorptionsentfeuchter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_153e76f76811ccdd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_153e76f76811ccdd"
          ]
        }
      },
      "evidenceIds": [
        "ear_153e76f76811ccdd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Adsorptionsentfeuchter / Desiccant Dehumidifier",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8dacfb898929d7a5",
      "name": "电动摩托车",
      "officialName": "E-Motorrad",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8dacfb898929d7a5"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_8dacfb898929d7a5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：E-Motorrad / electric Motorbike",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「E-Motorrad」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_6ea04df6e56fd6d3",
      "name": "汽车火花塞",
      "officialName": "Zündkerze Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6ea04df6e56fd6d3"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_6ea04df6e56fd6d3"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Zündkerze Kfz / Spark Plug (automotive)",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Zündkerze Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_d0229f16961a2d4f",
      "name": "汽车发电机",
      "officialName": "Lichtmaschine Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d0229f16961a2d4f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d0229f16961a2d4f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Lichtmaschine Kfz / Alternator (automotive)",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Lichtmaschine Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_644605b62a178a23",
      "name": "ABS 传感器",
      "officialName": "ABS-Sensor Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_644605b62a178a23"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_644605b62a178a23"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：ABS-Sensor Kfz / Airbag (automotive)",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「ABS-Sensor Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_6241509eb1ae5084",
      "name": "传真机",
      "officialName": "Faxgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6241509eb1ae5084"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6241509eb1ae5084"
          ]
        }
      },
      "evidenceIds": [
        "ear_6241509eb1ae5084"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Faxgerät / Fax machine",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1d06c945eb9c02b4",
      "name": "电话答录机",
      "officialName": "Anrufbeantworter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1d06c945eb9c02b4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1d06c945eb9c02b4"
          ]
        }
      },
      "evidenceIds": [
        "ear_1d06c945eb9c02b4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Anrufbeantworter / Answering machine",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9d5f1013473aa67d",
      "name": "摄像机",
      "officialName": "Videokamera",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9d5f1013473aa67d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9d5f1013473aa67d"
          ]
        }
      },
      "evidenceIds": [
        "ear_9d5f1013473aa67d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Videokamera / Video camera",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_923efaa7fae59594",
      "name": "绝缘材料（线缆绝缘）",
      "officialName": "Isoliermaterial",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_923efaa7fae59594"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_923efaa7fae59594"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Isoliermaterial / Cable insulation",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Isoliermaterial」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_df8edb08d7ac8c81",
      "name": "带附加功能插座（含网络插座）",
      "officialName": "Steckdose mit Zusatzfunktion (auch Web- und IP-Steckdose)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_df8edb08d7ac8c81"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_df8edb08d7ac8c81"
          ]
        }
      },
      "evidenceIds": [
        "ear_df8edb08d7ac8c81"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Steckdose mit Zusatzfunktion (auch Web- und IP-Steckdose) / Socket with additional function (also web and IP socket)",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_cac3dfffb99371e8",
      "name": "夜视仪",
      "officialName": "Nachtsichtgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cac3dfffb99371e8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cac3dfffb99371e8"
          ]
        }
      },
      "evidenceIds": [
        "ear_cac3dfffb99371e8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Nachtsichtgerät / Night vision equipment",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_02c3c48a5078c2d8",
      "name": "桑拿设备",
      "officialName": "Sauna",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_02c3c48a5078c2d8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_02c3c48a5078c2d8"
          ]
        }
      },
      "evidenceIds": [
        "ear_02c3c48a5078c2d8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Sauna / Sauna",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f20a6048cc6693a6",
      "name": "充电桩",
      "officialName": "Stromtankstelle",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f20a6048cc6693a6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_f20a6048cc6693a6"
          ]
        }
      },
      "evidenceIds": [
        "ear_f20a6048cc6693a6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Stromtankstelle / Charging station",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8959679601e07426",
      "name": "美容床/椅",
      "officialName": "Kosmetikliege/-stuhl",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8959679601e07426"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_8959679601e07426"
          ]
        }
      },
      "evidenceIds": [
        "ear_8959679601e07426"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kosmetikliege/-stuhl / Beautician's bed/chair",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9ccff7b1ba3791b5",
      "name": "带电气功能的家具",
      "officialName": "Möbel mit integrierter elektrischer Funktion",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9ccff7b1ba3791b5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9ccff7b1ba3791b5"
          ]
        }
      },
      "evidenceIds": [
        "ear_9ccff7b1ba3791b5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Möbel mit integrierter elektrischer Funktion / Furniture with integrated electrical function",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c449865fb987c760",
      "name": "恒温控制器",
      "officialName": "Thermostat",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c449865fb987c760"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c449865fb987c760"
          ]
        }
      },
      "evidenceIds": [
        "ear_c449865fb987c760"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Thermostat / Thermostat",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9fa4292981cd8ffe",
      "name": "日光浴舱",
      "officialName": "Bräunungskabine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9fa4292981cd8ffe"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_9fa4292981cd8ffe"
          ]
        }
      },
      "evidenceIds": [
        "ear_9fa4292981cd8ffe"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bräunungskabine / Tanning cabin",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ca85243488941cdd",
      "name": "起身辅助装置",
      "officialName": "Aufstehhilfe",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ca85243488941cdd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ca85243488941cdd"
          ]
        }
      },
      "evidenceIds": [
        "ear_ca85243488941cdd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Aufstehhilfe / Stand-up aid",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1799f2bef618ab8c",
      "name": "数显卡尺",
      "officialName": "Digitaler Messschieber",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1799f2bef618ab8c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1799f2bef618ab8c"
          ]
        }
      },
      "evidenceIds": [
        "ear_1799f2bef618ab8c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Digitaler Messschieber / Electronic caliper",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_892ab9e2e0e05bb7",
      "name": "半导体饮料冷藏柜",
      "officialName": "Getränkekühler (thermoelektrisch)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_892ab9e2e0e05bb7"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_892ab9e2e0e05bb7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Getränkekühler (thermoelektrisch) / Drinks cooler (thermoelectric)",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Getränkekühler (thermoelektrisch)」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ec81dc773edac6f5",
      "name": "半导体车载冰箱",
      "officialName": "Kühlbox (thermoelektrisch)",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ec81dc773edac6f5"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ec81dc773edac6f5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kühlbox (thermoelektrisch) / Cooler (thermoelectric)",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Kühlbox (thermoelektrisch)」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_77f74a52d7f71a46",
      "name": "电烤炉",
      "officialName": "Elektrogrill",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_77f74a52d7f71a46"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_77f74a52d7f71a46"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Elektrogrill / Electric grill",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Elektrogrill」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_42da12096c246396",
      "name": "电刺激肌肉训练仪",
      "officialName": "Elektrostimulationsgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_42da12096c246396"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_42da12096c246396"
          ]
        }
      },
      "evidenceIds": [
        "ear_42da12096c246396"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Elektrostimulationsgerät / Muscle stimulator",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2981fcb55503b85a",
      "name": "GPS 定位设备",
      "officialName": "GPS-Gerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2981fcb55503b85a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2981fcb55503b85a"
          ]
        }
      },
      "evidenceIds": [
        "ear_2981fcb55503b85a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：GPS-Gerät / GPS equipment",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d9367baa861a2e5e",
      "name": "电动滑板车",
      "officialName": "E-Scooter",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d9367baa861a2e5e"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d9367baa861a2e5e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：E-Scooter / Electric Scooter",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「E-Scooter」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Nur E-Scooter mit zwei Rädern und ohne Sitzplatz gehören zur Geräteart Großgeräte, die in privaten Haushalten genutzt werden können. E-Scooter mit einer anderen Anzahl an Rädern oder mit Sitzplatz sind nicht registrierungspflichtig.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e39594fe9875a4ff",
      "name": "消毒液分配器",
      "officialName": "Hygienespender",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e39594fe9875a4ff"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e39594fe9875a4ff"
          ]
        }
      },
      "evidenceIds": [
        "ear_e39594fe9875a4ff"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hygienespender / Sanitizer dispenser",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c3b111728739532c",
      "name": "水泵控制器",
      "officialName": "Pumpensteuerung",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c3b111728739532c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c3b111728739532c"
          ]
        }
      },
      "evidenceIds": [
        "ear_c3b111728739532c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Pumpensteuerung / Water pump control",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_07ea218106d5602c",
      "name": "扩音器",
      "officialName": "Me­ga­fon",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_07ea218106d5602c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_07ea218106d5602c"
          ]
        }
      },
      "evidenceIds": [
        "ear_07ea218106d5602c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Me­ga­fon / Megaphone",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f481aaa87196515c",
      "name": "旅行转换插头",
      "officialName": "Reisestecker",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f481aaa87196515c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f481aaa87196515c"
          ]
        }
      },
      "evidenceIds": [
        "ear_f481aaa87196515c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Reisestecker / Travel plug",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f05a225e14ff5e19",
      "name": "集成电路",
      "officialName": "IC",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f05a225e14ff5e19"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_f05a225e14ff5e19"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：IC / Integrated circuit",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「IC」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_cfb2e41f5aa59d60",
      "name": "DIN 导轨",
      "officialName": "Hutschiene",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cfb2e41f5aa59d60"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_cfb2e41f5aa59d60"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hutschiene / DIN rail",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Hutschiene」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_fd07016f995c6e13",
      "name": "疱疹热疗笔",
      "officialName": "Herpesstift",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fd07016f995c6e13"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fd07016f995c6e13"
          ]
        }
      },
      "evidenceIds": [
        "ear_fd07016f995c6e13"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Herpesstift / Heat pen",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6717a5f0c85cee95",
      "name": "电动护理床",
      "officialName": "Pflegebett",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6717a5f0c85cee95"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6717a5f0c85cee95"
          ]
        }
      },
      "evidenceIds": [
        "ear_6717a5f0c85cee95"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Pflegebett / Nursing bed, electric",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c602ae6412db2947",
      "name": "智能家居设备",
      "officialName": "Gerät der Hausautomation",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c602ae6412db2947"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c602ae6412db2947"
          ]
        }
      },
      "evidenceIds": [
        "ear_c602ae6412db2947"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gerät der Hausautomation / House automation equipment",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ce648044d00733ab",
      "name": "模型制作设备",
      "officialName": "Gerät für Modellbau",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ce648044d00733ab"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_ce648044d00733ab"
          ]
        }
      },
      "evidenceIds": [
        "ear_ce648044d00733ab"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Gerät für Modellbau / Model construction equipment",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_c1c81f1f286c7643",
      "name": "婴儿监视器",
      "officialName": "Babyfon",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_c1c81f1f286c7643"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_c1c81f1f286c7643"
          ]
        }
      },
      "evidenceIds": [
        "ear_c1c81f1f286c7643"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Babyfon / Baby monitor",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_050d16e8dc6c9f0d",
      "name": "遮阳篷风速传感器",
      "officialName": "Markisenwächter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_050d16e8dc6c9f0d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_050d16e8dc6c9f0d"
          ]
        }
      },
      "evidenceIds": [
        "ear_050d16e8dc6c9f0d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Markisenwächter / Wind sensor for awnings",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e5874adb3858fb6f",
      "name": "蝙蝠探测器",
      "officialName": "Fledermaus-Detektor",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e5874adb3858fb6f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e5874adb3858fb6f"
          ]
        }
      },
      "evidenceIds": [
        "ear_e5874adb3858fb6f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fledermaus-Detektor / Bat detector",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_fb88f5bbaa357d3e",
      "name": "食物烘干机",
      "officialName": "Dörrautomat",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fb88f5bbaa357d3e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fb88f5bbaa357d3e"
          ]
        }
      },
      "evidenceIds": [
        "ear_fb88f5bbaa357d3e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Dörrautomat / Food dehydrator",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2b992c6d37bd56e4",
      "name": "电子棋类电脑",
      "officialName": "Schachcomputer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2b992c6d37bd56e4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2b992c6d37bd56e4"
          ]
        }
      },
      "evidenceIds": [
        "ear_2b992c6d37bd56e4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schachcomputer / Computer chess board",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_adc74a584c02de65",
      "name": "自行车码表",
      "officialName": "Fahrradcomputer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_adc74a584c02de65"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_adc74a584c02de65"
          ]
        }
      },
      "evidenceIds": [
        "ear_adc74a584c02de65"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fahrradcomputer / Computer for biking",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f3bd8c269e72fc72",
      "name": "幻灯机",
      "officialName": "Diaprojektor",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f3bd8c269e72fc72"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f3bd8c269e72fc72"
          ]
        }
      },
      "evidenceIds": [
        "ear_f3bd8c269e72fc72"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Diaprojektor / Slide projector",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_bd518ae0fb869ad8",
      "name": "烟雾机",
      "officialName": "Nebelmaschine",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bd518ae0fb869ad8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_bd518ae0fb869ad8"
          ]
        }
      },
      "evidenceIds": [
        "ear_bd518ae0fb869ad8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Nebelmaschine / Fog machine",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_753987a566630f1b",
      "name": "电热鞋垫",
      "officialName": "Beheizbare Schuhsohlen",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_753987a566630f1b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_753987a566630f1b"
          ]
        }
      },
      "evidenceIds": [
        "ear_753987a566630f1b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Beheizbare Schuhsohlen / Heated insoles",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_7fc1a8d2fe72854d",
      "name": "奶泡机",
      "officialName": "Milchaufschäumer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7fc1a8d2fe72854d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7fc1a8d2fe72854d"
          ]
        }
      },
      "evidenceIds": [
        "ear_7fc1a8d2fe72854d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Milchaufschäumer / Milk frother",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_02ce8e0586520ca5",
      "name": "雾化吸入器",
      "officialName": "Inhalationsgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_02ce8e0586520ca5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_02ce8e0586520ca5"
          ]
        }
      },
      "evidenceIds": [
        "ear_02ce8e0586520ca5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Inhalationsgerät / Inhaler",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a5a191fc5d0c20be",
      "name": "单耳耳机",
      "officialName": "Ein-Ohr-Headset",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a5a191fc5d0c20be"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a5a191fc5d0c20be"
          ]
        }
      },
      "evidenceIds": [
        "ear_a5a191fc5d0c20be"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Ein-Ohr-Headset / Single sided Headset",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_43a079f3f580d361",
      "name": "烟雾报警器",
      "officialName": "Rauchmelder",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_43a079f3f580d361"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_43a079f3f580d361"
          ]
        }
      },
      "evidenceIds": [
        "ear_43a079f3f580d361"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Rauchmelder / Smoke detector",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_57245c59052b426a",
      "name": "电缆卷盘",
      "officialName": "Kabeltrommel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_57245c59052b426a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_57245c59052b426a"
          ]
        }
      },
      "evidenceIds": [
        "ear_57245c59052b426a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kabeltrommel / Cable reel",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_76997876b9d774d8",
      "name": "数码单反相机",
      "officialName": "DSLR-Kamera",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_76997876b9d774d8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_76997876b9d774d8"
          ]
        }
      },
      "evidenceIds": [
        "ear_76997876b9d774d8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：DSLR-Kamera / DSLR camera",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_eccc3eac4d260474",
      "name": "电动打字机",
      "officialName": "Schreibmaschine (elektrische)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_eccc3eac4d260474"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_eccc3eac4d260474"
          ]
        }
      },
      "evidenceIds": [
        "ear_eccc3eac4d260474"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schreibmaschine (elektrische) / Typewriter (electric)",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_00bbd02bafe23943",
      "name": "平板扫描仪",
      "officialName": "Flachbettscanner",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_00bbd02bafe23943"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_00bbd02bafe23943"
          ]
        }
      },
      "evidenceIds": [
        "ear_00bbd02bafe23943"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Flachbettscanner / Document Scanner",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1a49c5ce8eb6cd38",
      "name": "接地线",
      "officialName": "Erdungskabel",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1a49c5ce8eb6cd38"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_1a49c5ce8eb6cd38"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Erdungskabel / grounding cable",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Erdungskabel」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_777ba5daefa8be5a",
      "name": "电压转换器",
      "officialName": "Spannungswandler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_777ba5daefa8be5a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_777ba5daefa8be5a"
          ]
        }
      },
      "evidenceIds": [
        "ear_777ba5daefa8be5a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Spannungswandler / Voltage converter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_80e5cc7f2ae17ec9",
      "name": "门铃",
      "officialName": "Haustürklingel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_80e5cc7f2ae17ec9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_80e5cc7f2ae17ec9"
          ]
        }
      },
      "evidenceIds": [
        "ear_80e5cc7f2ae17ec9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Haustürklingel / Door bell",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8bc9212a01c3d949",
      "name": "电动卷笔刀",
      "officialName": "elektrischer Anspitzer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8bc9212a01c3d949"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8bc9212a01c3d949"
          ]
        }
      },
      "evidenceIds": [
        "ear_8bc9212a01c3d949"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：elektrischer Anspitzer / Electric pencil sharpener",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_598d5cb44ceca042",
      "name": "电动后视镜",
      "officialName": "elektrischer Rückspiegel Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_598d5cb44ceca042"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_598d5cb44ceca042"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：elektrischer Rückspiegel Kfz / electric Rear-view Mirror",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「elektrischer Rückspiegel Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_68a8bfa2b9e7fe6c",
      "name": "示波器",
      "officialName": "Oszilloskop",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_68a8bfa2b9e7fe6c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_68a8bfa2b9e7fe6c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Oszilloskop / Oscilloscope",
          "EAR 候选设备类型：第 2 类 · 仅限专业场所使用的屏幕设备；第 2 类 · 可用于家庭的屏幕设备；第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Oszilloskop」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob es sich um ein Bildschirmgerät oder ein Klein-/Großgerät handelt, hängt von der Größe des Bildschirms ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_de6dadc427db022d",
      "name": "插座测试仪",
      "officialName": "Steckdosentester",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_de6dadc427db022d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_de6dadc427db022d"
          ]
        }
      },
      "evidenceIds": [
        "ear_de6dadc427db022d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Steckdosentester / Socket Tester",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_b1cb11cfadcd348e",
      "name": "遥控器",
      "officialName": "Fernsteuerung",
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b1cb11cfadcd348e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_b1cb11cfadcd348e"
          ]
        }
      },
      "evidenceIds": [
        "ear_b1cb11cfadcd348e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Fernsteuerung / Remote control",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8d1a96f942f943bf",
      "name": "热风枪",
      "officialName": "Heißluftpistole",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8d1a96f942f943bf"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8d1a96f942f943bf"
          ]
        }
      },
      "evidenceIds": [
        "ear_8d1a96f942f943bf"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Heißluftpistole / Heat gun",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d38ab434911e887c",
      "name": "调光器",
      "officialName": "Lichtdimmer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d38ab434911e887c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d38ab434911e887c"
          ]
        }
      },
      "evidenceIds": [
        "ear_d38ab434911e887c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Lichtdimmer / Dimmer switch",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d694caab755455a6",
      "name": "麦克风",
      "officialName": "Mikrofon",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d694caab755455a6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d694caab755455a6"
          ]
        }
      },
      "evidenceIds": [
        "ear_d694caab755455a6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Mikrofon / Microphone",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_01dffabd439b6436",
      "name": "LCD 模块",
      "officialName": "LCD-Modul",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "screen",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_01dffabd439b6436"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_01dffabd439b6436"
          ]
        }
      },
      "evidenceIds": [
        "ear_01dffabd439b6436"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LCD-Modul / LCD module",
          "EAR 候选设备类型：第 2 类 · 可用于家庭的屏幕设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9b2c2b56ce9d11db",
      "name": "感应垃圾桶",
      "officialName": "Sensormülleimer",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9b2c2b56ce9d11db"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_9b2c2b56ce9d11db"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Sensormülleimer / Sensor bin",
          "EAR 候选设备类型：第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Sensormülleimer」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_ee75d0dad0b324a0",
      "name": "玩具",
      "officialName": "Spielzeug",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ee75d0dad0b324a0"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ee75d0dad0b324a0"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Spielzeug / Toy",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Spielzeug」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Auch Spielzeug mit einem Bildschirm größer als 100 cm² ist ein Klein- oder Großgerät. Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_6f8b7d7628ece654",
      "name": "插电式香薰器",
      "officialName": "Duftstecker",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6f8b7d7628ece654"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6f8b7d7628ece654"
          ]
        }
      },
      "evidenceIds": [
        "ear_6f8b7d7628ece654"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Duftstecker / air freshener with plug",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_65e61e7cd0c72631",
      "name": "NFC 芯片",
      "officialName": "NFC-Chip",
      "coverage": "supported",
      "decision": {
        "mode": "variants",
        "required": [],
        "variants": [
          {
            "kind": "ict",
            "household": "no"
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
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_65e61e7cd0c72631"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_65e61e7cd0c72631"
          ]
        }
      },
      "evidenceIds": [
        "ear_65e61e7cd0c72631"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：NFC-Chip / NFC chip",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备；第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_edfbb376a48737d4",
      "name": "泵",
      "officialName": "Pumpe",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_edfbb376a48737d4"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_edfbb376a48737d4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Pumpe / Pump",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Pumpe」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_dc3915cb33bbb51e",
      "name": "票据发放机",
      "officialName": "Ticketspender",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_dc3915cb33bbb51e"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_dc3915cb33bbb51e"
          ]
        }
      },
      "evidenceIds": [
        "ear_dc3915cb33bbb51e"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Ticketspender / Ticket dispenser",
          "EAR 候选设备类型：第 5 类 · 仅限专业场所使用的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_fa375f1aa72bc9a8",
      "name": "小票打印机",
      "officialName": "Quittungsdrucker",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fa375f1aa72bc9a8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_fa375f1aa72bc9a8"
          ]
        }
      },
      "evidenceIds": [
        "ear_fa375f1aa72bc9a8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Quittungsdrucker / Label printer",
          "EAR 候选设备类型：第 6 类 · 仅限专业场所使用的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_ab1ccd7f7cf0d32a",
      "name": "汽车保险丝",
      "officialName": "Kfz-Sicherung",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ab1ccd7f7cf0d32a"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ab1ccd7f7cf0d32a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kfz-Sicherung / Car fuse",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Kfz-Sicherung」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_143566767b3b05e1",
      "name": "调光开关",
      "officialName": "Dimmer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_143566767b3b05e1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_143566767b3b05e1"
          ]
        }
      },
      "evidenceIds": [
        "ear_143566767b3b05e1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Dimmer / Dimmer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8d0ddecc2f73824b",
      "name": "高频头（LNB）",
      "officialName": "LNB",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8d0ddecc2f73824b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8d0ddecc2f73824b"
          ]
        }
      },
      "evidenceIds": [
        "ear_8d0ddecc2f73824b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LNB / Low-noise block downconverter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9d7d38fe1593322f",
      "name": "工具",
      "officialName": "Werkzeug",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9d7d38fe1593322f"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_9d7d38fe1593322f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Werkzeug / Tool",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备；第 4 类 · 可用于家庭的大型设备；第 5 类 · 仅限专业场所使用的小型设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Werkzeug」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob die Geräteart Klein- oder Großgeräte zu wählen ist, hängt von der Kantenlänge/äußeren Abmessung ab. Ob die b2b- oder die b2c-Geräteart zu wählen ist, ist abhängig vom Ort der Nutzung.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_68a48ac4f8dc0919",
      "name": "烘鞋器",
      "officialName": "Schuhtrockner",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_68a48ac4f8dc0919"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_68a48ac4f8dc0919"
          ]
        }
      },
      "evidenceIds": [
        "ear_68a48ac4f8dc0919"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schuhtrockner / Shoe dryer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_3a4517a577195e84",
      "name": "显微镜",
      "officialName": "Mikroskop",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_3a4517a577195e84"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_3a4517a577195e84"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Mikroskop / Microscope",
          "EAR 候选设备类型：第 2 类 · 可用于家庭的屏幕设备；第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Mikroskop」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Ob es sich um ein Bildschirmgerät oder ein Klein-/Großgerät handelt, hängt von der Größe des Bildschirms ab.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_e718f8bf9e9a42b1",
      "name": "土壤湿度计",
      "officialName": "Bodenfeuchtigkeitsmesser",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e718f8bf9e9a42b1"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_e718f8bf9e9a42b1"
          ]
        }
      },
      "evidenceIds": [
        "ear_e718f8bf9e9a42b1"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Bodenfeuchtigkeitsmesser / Soil moisture meter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f89ea7f4d8b05074",
      "name": "压缩机制冷饮料柜",
      "officialName": "Getränkekühler (mit Kompressor)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "thermal",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f89ea7f4d8b05074"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f89ea7f4d8b05074"
          ]
        }
      },
      "evidenceIds": [
        "ear_f89ea7f4d8b05074"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Getränkekühler (mit Kompressor) / Drinks cooler (with compressor)",
          "EAR 候选设备类型：第 1 类 · 可用于家庭的温度交换设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a76da995c8a27e99",
      "name": "压缩机制冷保温箱",
      "officialName": "Kühlbox (mit Kompressor)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "thermal",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a76da995c8a27e99"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a76da995c8a27e99"
          ]
        }
      },
      "evidenceIds": [
        "ear_a76da995c8a27e99"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kühlbox (mit Kompressor) / Cooler (with compressor)",
          "EAR 候选设备类型：第 1 类 · 可用于家庭的温度交换设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9e8a5ae39f245b8b",
      "name": "数显扭力扳手",
      "officialName": "Digitaler Drehmomentschlüssel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9e8a5ae39f245b8b"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9e8a5ae39f245b8b"
          ]
        }
      },
      "evidenceIds": [
        "ear_9e8a5ae39f245b8b"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Digitaler Drehmomentschlüssel / Digital torque wrench",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_04232d3c10f01c75",
      "name": "烤肉架电机（后装）",
      "officialName": "Grillmotor (zum Nachrüsten)",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_04232d3c10f01c75"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_04232d3c10f01c75"
          ]
        }
      },
      "evidenceIds": [
        "ear_04232d3c10f01c75"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Grillmotor (zum Nachrüsten) / Barbeque motor (retrofit)",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_61c48c2f74e05147",
      "name": "电子节拍器",
      "officialName": "Digitales Metronom",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_61c48c2f74e05147"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_61c48c2f74e05147"
          ]
        }
      },
      "evidenceIds": [
        "ear_61c48c2f74e05147"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Digitales Metronom / Digital metronome tuner",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_514340e186f7c4a8",
      "name": "超声波驱虫器",
      "officialName": "Ultraschall Schädlingsbekämpfer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_514340e186f7c4a8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_514340e186f7c4a8"
          ]
        }
      },
      "evidenceIds": [
        "ear_514340e186f7c4a8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Ultraschall Schädlingsbekämpfer / Ultrasonic pest repeller",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_bec7f906cff021ee",
      "name": "LED 发光手环",
      "officialName": "LED-Armband",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bec7f906cff021ee"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_bec7f906cff021ee"
          ]
        }
      },
      "evidenceIds": [
        "ear_bec7f906cff021ee"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Armband / LED light bracelet",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_7425e5735747a691",
      "name": "内置电位器",
      "officialName": "Einbau-Potentiometer",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7425e5735747a691"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_7425e5735747a691"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Einbau-Potentiometer / Single potentiomete",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Einbau-Potentiometer」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_aef442dc064f0718",
      "name": "电容器",
      "officialName": "Kondensator",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_aef442dc064f0718"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_aef442dc064f0718"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kondensator / Capacitor",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Kondensator」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_aaa0d78af49a2fbc",
      "name": "晶体管",
      "officialName": "Transistor",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_aaa0d78af49a2fbc"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_aaa0d78af49a2fbc"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Transistor / Transistor",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Transistor」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_9c75661c10d09cbe",
      "name": "潜水电脑",
      "officialName": "Tauchcomputer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9c75661c10d09cbe"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9c75661c10d09cbe"
          ]
        }
      },
      "evidenceIds": [
        "ear_9c75661c10d09cbe"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Tauchcomputer / Computer for diving",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_2c7983adf8c9e18c",
      "name": "计算器",
      "officialName": "Taschenrechner",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2c7983adf8c9e18c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2c7983adf8c9e18c"
          ]
        }
      },
      "evidenceIds": [
        "ear_2c7983adf8c9e18c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Taschenrechner / Pocket calculator",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_96d95376b8db48d9",
      "name": "卫星电话",
      "officialName": "Satellitentelefon",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_96d95376b8db48d9"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_96d95376b8db48d9"
          ]
        }
      },
      "evidenceIds": [
        "ear_96d95376b8db48d9"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Satellitentelefon / Satellite telephone",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_f3d09cf7843490bf",
      "name": "平板手机",
      "officialName": "Phablet",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f3d09cf7843490bf"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f3d09cf7843490bf"
          ]
        }
      },
      "evidenceIds": [
        "ear_f3d09cf7843490bf"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Phablet / Phablet",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_fe8509830dcdae7d",
      "name": "数据记录仪",
      "officialName": "Datenaufzeichnungsgerät",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fe8509830dcdae7d"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fe8509830dcdae7d"
          ]
        }
      },
      "evidenceIds": [
        "ear_fe8509830dcdae7d"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Datenaufzeichnungsgerät / Data recording equipment",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5131be85f934d65a",
      "name": "野外摄像机（狩猎相机）",
      "officialName": "Wildkamera",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5131be85f934d65a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5131be85f934d65a"
          ]
        }
      },
      "evidenceIds": [
        "ear_5131be85f934d65a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Wildkamera / Wildlife camera",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_cc8af3cf05fef295",
      "name": "电阻器",
      "officialName": "Widerstand",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cc8af3cf05fef295"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_cc8af3cf05fef295"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Widerstand / Resistor",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Widerstand」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_bef9e10b68c8ec32",
      "name": "接线盒",
      "officialName": "Abzweigdose",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_bef9e10b68c8ec32"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_bef9e10b68c8ec32"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Abzweigdose / Junction box",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Abzweigdose」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_ad4cb87fbca5ae52",
      "name": "线槽（空）",
      "officialName": "Kabelkanal",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_ad4cb87fbca5ae52"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_ad4cb87fbca5ae52"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kabelkanal / empty cable duct",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Kabelkanal」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_d982bb65e351152c",
      "name": "CD/DVD/蓝光光盘",
      "officialName": "CD-, DVD-, Blu-Ray-Disc",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d982bb65e351152c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_d982bb65e351152c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：CD-, DVD-, Blu-Ray-Disc / CD, DVD, Blu-Ray Disc",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「CD-, DVD-, Blu-Ray-Disc」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_2e6031f9b829cad4",
      "name": "广播/电视接收机",
      "officialName": "Receiver für Rundfunk (Radio), TV",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2e6031f9b829cad4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2e6031f9b829cad4"
          ]
        }
      },
      "evidenceIds": [
        "ear_2e6031f9b829cad4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Receiver für Rundfunk (Radio), TV / Receiver for radio, TV",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d62ac6924fbbde99",
      "name": "音响组合",
      "officialName": "Hi-Fi-Anlage",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d62ac6924fbbde99"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d62ac6924fbbde99"
          ]
        }
      },
      "evidenceIds": [
        "ear_d62ac6924fbbde99"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hi-Fi-Anlage / Hi-fi equipment",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_de7ca8bbf929da1c",
      "name": "投币游戏机",
      "officialName": "Geldspielautomat",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "large",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_de7ca8bbf929da1c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_de7ca8bbf929da1c"
          ]
        }
      },
      "evidenceIds": [
        "ear_de7ca8bbf929da1c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Geldspielautomat / Coin slot machine",
          "EAR 候选设备类型：第 4 类 · 仅限专业场所使用的大型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_a809fd2e1602eac5",
      "name": "插槽式处理器",
      "officialName": "Prozessor zum Stecken in einen Sockel",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_a809fd2e1602eac5"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_a809fd2e1602eac5"
          ]
        }
      },
      "evidenceIds": [
        "ear_a809fd2e1602eac5"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Prozessor zum Stecken in einen Sockel / Processor to insert in a base",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_b3aaf2cad57d41fb",
      "name": "冷藏展示柜",
      "officialName": "Kühltheke",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "thermal",
        "required": [],
        "conditions": {
          "household": "no"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_b3aaf2cad57d41fb"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "no",
          "basis": "assumption",
          "sourceIds": [
            "ear_b3aaf2cad57d41fb"
          ]
        }
      },
      "evidenceIds": [
        "ear_b3aaf2cad57d41fb"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kühltheke / Refrigerated counter",
          "EAR 候选设备类型：第 1 类 · 仅限专业场所使用的温度交换设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6634de8d29c9c3b4",
      "name": "吸奶器",
      "officialName": "Milchpumpe",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6634de8d29c9c3b4"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6634de8d29c9c3b4"
          ]
        }
      },
      "evidenceIds": [
        "ear_6634de8d29c9c3b4"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Milchpumpe / Breast pump",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1509ea02ffe09bc7",
      "name": "LED 发光箭尾",
      "officialName": "LED-Leuchpfeiltnocken",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1509ea02ffe09bc7"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1509ea02ffe09bc7"
          ]
        }
      },
      "evidenceIds": [
        "ear_1509ea02ffe09bc7"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：LED-Leuchpfeiltnocken / LED lighted arrow nocks",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_0c565eb97713bd44",
      "name": "汽车动力调校设备",
      "officialName": "Chiptuninggerät für Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_0c565eb97713bd44"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_0c565eb97713bd44"
          ]
        }
      },
      "evidenceIds": [
        "ear_0c565eb97713bd44"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Chiptuninggerät für Kfz / Chiptuning for cars",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_fc883590d17770b8",
      "name": "低压耦合器",
      "officialName": "Niedervoltkoppler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_fc883590d17770b8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_fc883590d17770b8"
          ]
        }
      },
      "evidenceIds": [
        "ear_fc883590d17770b8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Niedervoltkoppler / Low-voltage coupler",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_9f1ce91388e29975",
      "name": "3D 打印笔",
      "officialName": "3D-Druckstift",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_9f1ce91388e29975"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_9f1ce91388e29975"
          ]
        }
      },
      "evidenceIds": [
        "ear_9f1ce91388e29975"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：3D-Druckstift / 3D printing pen",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_252a632695cc6a66",
      "name": "电动机",
      "officialName": "Elektromotor",
      "coverage": "review",
      "decision": {
        "mode": "review"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_252a632695cc6a66"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_252a632695cc6a66"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Elektromotor / Electric motor",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备；不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "officialReferenceConditions": "EAR 对「Elektromotor」列出多个候选结果，请按实际用途、外部尺寸与使用地点核对；不符合所列条件或无法确定时，请联系 EAR 复核。 EAR 说明：Eigenständige bzw. einzeln angebotene Elektromotore sind registrierungspflichtig.",
      "reviewReason": "special_conditions_not_covered"
    },
    {
      "id": "p_45fa8f79ea001415",
      "name": "压电打火机",
      "officialName": "Piezofeuerzeug",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_45fa8f79ea001415"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_45fa8f79ea001415"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Piezofeuerzeug / piezoelectric lighter",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Piezofeuerzeug」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_f041dc33cf3aad09",
      "name": "红点瞄准镜",
      "officialName": "Rotpunktvisier",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_f041dc33cf3aad09"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_f041dc33cf3aad09"
          ]
        }
      },
      "evidenceIds": [
        "ear_f041dc33cf3aad09"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Rotpunktvisier / Hunting Riflescope Red Dot",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_873a8112a9666ffe",
      "name": "暗装接线盒",
      "officialName": "Unterputz-Gerätedose",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_873a8112a9666ffe"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_873a8112a9666ffe"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Unterputz-Gerätedose / Flush-mounted switch box",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Unterputz-Gerätedose」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_d1114324f04e2716",
      "name": "电动刀",
      "officialName": "Elektrisches Messer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d1114324f04e2716"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d1114324f04e2716"
          ]
        }
      },
      "evidenceIds": [
        "ear_d1114324f04e2716"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Elektrisches Messer / Electric knive",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_cb85c01518540c8c",
      "name": "电击器",
      "officialName": "Elektroschocker",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_cb85c01518540c8c"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_cb85c01518540c8c"
          ]
        }
      },
      "evidenceIds": [
        "ear_cb85c01518540c8c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Elektroschocker / Electric shock device",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d49bcb4e7c22d3b6",
      "name": "电子哨",
      "officialName": "Elektronische Pfeife",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d49bcb4e7c22d3b6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d49bcb4e7c22d3b6"
          ]
        }
      },
      "evidenceIds": [
        "ear_d49bcb4e7c22d3b6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Elektronische Pfeife / Electronic whistle",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1585c71a70e91c01",
      "name": "LCD 自动变光电焊面罩",
      "officialName": "Schweißhelm mit LCD-Visier",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1585c71a70e91c01"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_1585c71a70e91c01"
          ]
        }
      },
      "evidenceIds": [
        "ear_1585c71a70e91c01"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schweißhelm mit LCD-Visier / Welding helmet, LCD",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_403a74f7fe1115f8",
      "name": "HDMI 分配器",
      "officialName": "HDMI-Splitter",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_403a74f7fe1115f8"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_403a74f7fe1115f8"
          ]
        }
      },
      "evidenceIds": [
        "ear_403a74f7fe1115f8"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：HDMI-Splitter / HDMI Switch",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_5b1ec99bf838f554",
      "name": "电动自拍杆",
      "officialName": "Selfie-Stick mit elektr. Funktion",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_5b1ec99bf838f554"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_5b1ec99bf838f554"
          ]
        }
      },
      "evidenceIds": [
        "ear_5b1ec99bf838f554"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Selfie-Stick mit elektr. Funktion / Selfie stick",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_1145bdd7b5feb650",
      "name": "焊条",
      "officialName": "Schweißelektrode",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_1145bdd7b5feb650"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_1145bdd7b5feb650"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Schweißelektrode / welding electrode",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Schweißelektrode」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_747f3da41a944695",
      "name": "单颗 LED",
      "officialName": "Einzel-LED",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_747f3da41a944695"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_747f3da41a944695"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Einzel-LED / single LED",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Einzel-LED」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_8aa5b0bda8c8b662",
      "name": "电话插座",
      "officialName": "Telefondose",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8aa5b0bda8c8b662"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8aa5b0bda8c8b662"
          ]
        }
      },
      "evidenceIds": [
        "ear_8aa5b0bda8c8b662"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Telefondose / Telephone outlet/socket",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_663533818e66ee6a",
      "name": "RGB 控制器",
      "officialName": "RGB-Controller",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_663533818e66ee6a"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_663533818e66ee6a"
          ]
        }
      },
      "evidenceIds": [
        "ear_663533818e66ee6a"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：RGB-Controller / RGB controller",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_7ae6d05af716455f",
      "name": "湿度计",
      "officialName": "Hygrometer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_7ae6d05af716455f"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_7ae6d05af716455f"
          ]
        }
      },
      "evidenceIds": [
        "ear_7ae6d05af716455f"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Hygrometer / Hygrometer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_6189330b271e8d07",
      "name": "USB 集线器",
      "officialName": "USB-Hub",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_6189330b271e8d07"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_6189330b271e8d07"
          ]
        }
      },
      "evidenceIds": [
        "ear_6189330b271e8d07"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：USB-Hub / USB Hub",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_105c339ccc214189",
      "name": "电话分线盒",
      "officialName": "Telefonverteiler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_105c339ccc214189"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_105c339ccc214189"
          ]
        }
      },
      "evidenceIds": [
        "ear_105c339ccc214189"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Telefonverteiler / Telephone junction box",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_8f6e1b524240c2a6",
      "name": "运行小时计",
      "officialName": "Betriebsstundenzähler",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_8f6e1b524240c2a6"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_8f6e1b524240c2a6"
          ]
        }
      },
      "evidenceIds": [
        "ear_8f6e1b524240c2a6"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Betriebsstundenzähler / Engine hour meter",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_e25e56a85965a98c",
      "name": "胎压监测系统",
      "officialName": "Reifendruckkontrollsystem Kfz",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_e25e56a85965a98c"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_e25e56a85965a98c"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Reifendruckkontrollsystem Kfz / Tyre pressure monitoring system",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Reifendruckkontrollsystem Kfz」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_31cc87185098a2dd",
      "name": "划船机仪表",
      "officialName": "Rudercomputer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_31cc87185098a2dd"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_31cc87185098a2dd"
          ]
        }
      },
      "evidenceIds": [
        "ear_31cc87185098a2dd"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Rudercomputer / Computer for rowing",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_d29f16e33de19490",
      "name": "加密狗",
      "officialName": "Kopierschutzstecker",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "ict",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_d29f16e33de19490"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_d29f16e33de19490"
          ]
        }
      },
      "evidenceIds": [
        "ear_d29f16e33de19490"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Kopierschutzstecker / Dongle",
          "EAR 候选设备类型：第 6 类 · 可用于家庭的小型信息和通信设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    },
    {
      "id": "p_68fdbb729bf0bc70",
      "name": "电感线圈",
      "officialName": "Spule",
      "coverage": "supported",
      "decision": {
        "mode": "outside_scope"
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_68fdbb729bf0bc70"
          ]
        }
      },
      "defaults": {},
      "evidenceIds": [
        "ear_68fdbb729bf0bc70"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Spule / Inductor",
          "EAR 候选设备类型：不在 ElektroG 适用范围内",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      },
      "scopeText": "EAR 将「Spule」列为不在 ElektroG 适用范围内。请核对实际产品是否与官方条目一致；如有电子功能或附加组件，需另行确认。"
    },
    {
      "id": "p_2c127bf32ccb4edf",
      "name": "定时器",
      "officialName": "Timer",
      "coverage": "supported",
      "decision": {
        "mode": "direct",
        "directKind": "small",
        "required": [],
        "conditions": {
          "household": "yes"
        }
      },
      "facts": {
        "referenceShape": {
          "value": "EAR 条目对应的完整产品形态",
          "basis": "curated_summary",
          "sourceIds": [
            "ear_2c127bf32ccb4edf"
          ]
        }
      },
      "defaults": {
        "household": {
          "value": "yes",
          "basis": "assumption",
          "sourceIds": [
            "ear_2c127bf32ccb4edf"
          ]
        }
      },
      "evidenceIds": [
        "ear_2c127bf32ccb4edf"
      ],
      "presentation": {
        "defaultsText": [
          "已匹配 EAR 官方条目：Timer / Timer",
          "EAR 候选设备类型：第 5 类 · 可用于家庭的小型设备",
          "本结果依据 EAR 官方候选设备类型，注册前请核对产品实际形态并到 EAR 复核。"
        ],
        "measurement": "body",
        "householdEditable": true,
        "sizeRuleDerived": false,
        "questionOverrides": {}
      }
    }
  ]
};
