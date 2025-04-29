/*
    Notes:

    This script stores the data source for the Flow Calculator logic. Only make edits to this script, do not touch the flowControllerLogic.js script.

    To add a new aerodrome, add it to the flowData array below. Copy/paste the ### Calculator UI section from a terminal page like Melbourne or Sydney onto the target markdown page and ensure that the flowControllerLogic.js script is referenced correctly. The script will automatically detect the aerodrome and create the form inside the divs.
*/

export const flowData = {
    "melbourne": {
        "09": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 0
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "PORTS STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 0
                }
            }          
        },
        "16": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 9,
                    "Non-Jet": 10
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 0
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "WAREN M STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "WENDY P STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        },
        "27": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 0
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 9,
                    "Non-Jet": 10
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 0
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        },
        "34": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "BOYSE V STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "LIZZI V STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 0
                }
            },
            "PORTS STAR": {
                "aircraft": {
                    "Jet & DH8D": 7,
                    "Non-Jet": 8
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 0
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        }
    },

    "sydney": {
        "07": {
            "BOREE STAR": {
                "aircraft": {
                    "Jet": 16
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MEPIL STAR": {
                "aircraft": {
                    "Non-Jet": 15,
                    "DH8D": 13
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet": 16,
                    "Non-Jet": 17,
                    "DH8D": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet": 11
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "ODALE STAR": {
                "aircraft": {
                    "Non-Jet": 10,
                    "DH8D": 9
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        },
        "16L": {
            "BOREE STAR": {
                "aircraft": {
                    "Jet": 11
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MEPIL STAR": {
                "aircraft": {
                    "Jet": 9,
                    "Non-Jet": 10,
                    "DH8D": 9
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet": 17,
                    "Non-Jet": 20,
                    "DH8D": 18
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet": 19
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "ODALE STAR": {
                "aircraft": {
                    "Jet": 16,
                    "Non-Jet": 19,
                    "DH8D": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        },
        "16R": {
            "BOREE STAR": {
                "aircraft": {
                    "Jet": 11
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MEPIL STAR": {
                "aircraft": {
                    "Non-Jet": 10,
                    "DH8D": 9
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet": 20,
                    "Non-Jet": 22,
                    "DH8D": 20
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "ODALE STAR": {
                "aircraft": {
                    "Non-Jet": 17,
                    "DH8D": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        },
        "25": {
            "BOREE STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MEPIL STAR": {
                "aircraft": {
                    "Non-Jet": 13,
                    "DH8D": 11
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet": 13,
                    "Non-Jet": 13,
                    "DH8D": 11
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "ODALE STAR": {
                "aircraft": {
                    "Non-Jet": 16,
                    "DH8D": 14
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        },
        "34L": {
            "BOREE STAR": {
                "aircraft": {
                    "Jet": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MEPIL STAR": {
                "aircraft": {
                    "Non-Jet": 20,
                    "DH8D": 18
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet": 18,
                    "Non-Jet": 20,
                    "DH8D": 18
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "ODALE STAR": {
                "aircraft": {
                    "Non-Jet": 16,
                    "DH8D": 14
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        },
        "34R": {
            "BOREE STAR": {
                "aircraft": {
                    "Jet": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MEPIL STAR": {
                "aircraft": {
                    "Jet": 15,
                    "Non-Jet": 19,
                    "DH8D": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet": 14,
                    "Non-Jet": 19,
                    "DH8D": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet": 19
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            },
            "ODALE STAR": {
                "aircraft": {
                    "Jet": 17,
                    "Non-Jet": 19,
                    "DH8D": 17
                },
                "corrections": {
                    "MX/CSR": -1,
                    "Reduced Speed": 1
                }
            }
        }
    },
    "adelaide": {
        "05": {

        },
        "23": {

        }
    }
};