---
  title: Cairns Flow
---

--8<-- "includes/abbreviations.md"

| Name                                      | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Cairns Flow :octicons-checklist-24:**   | CSF     |                         |             | CS_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as CSF. **KEN** must be staffed, and controllers intending to open CSF must coordinate with them *before* logging on.
	
## Local Knowledge
- Aircraft can be assigned the Xray or Victor STAR to reduce track miles
- Aircraft from the west/southwest can be assigned the TOTTY W STAR to reduce track miles
- With RWY 33 in use, aircraft via NONUM may be recleared DCT TOTTY for the TOTTY W STAR or DCT VEKBI for the HENDO A STAR


## Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "RWY 15"
    | STAR       | Jets & DH8D | Non-Jets |
    | ---------- | :------: | :------: |
    | **CODIE A/S/X/Z**<br>*ANDOP transition*<br>*AVDAN transition*<br>*LOCKA transition*<br>*OVLET transition*<br>*PUNIT transition*<br>*ZANEY transition*    | <br>14<br>12<br>13<br>13<br>14<br>14     | <br>15<br>14<br>14<br>14<br>16<br>15     |
    | **KASPI B/V**<br>*ANDOP transition*<br>*AVDAN transition*<br>*LOCKA transition*<br>*OVLET transition*<br>*PUNIT transition*<br>*ZANEY transition*    | <br>15<br>13<br>12<br>14<br>15<br>12     | <br>17<br>15<br>14<br>15<br>17<br>14     |
    | **NONUM A**<br>*Feeder Fix: NONUM*<br>*Feeder Fix: MUSEY*<br>*Feeder Fix: NORMA*    | <br>9^<br>15<br>18 | <br>11^<br>17<br>20 |
    | **NONUM V**<br>*Feeder Fix: NONUM*<br>*Feeder Fix: MUSEY*<br>*Feeder Fix: NORMA*    | <br>12^<br>17<br>20 | <br>13^<br>19<br>23 |
    | **NONUM U/W**<br>*Feeder Fix: NONUM*<br>*Feeder Fix: MUSEY*<br>*Feeder Fix: NORMA*    | <br>9^<br>14<br>17 | <br>10^<br>16<br>19 |
    | **UPOLO A**<br>*Feeder Fix: BARIA*    | <br>16 | <br>18 |
    | **UPOLO V/X**<br>*Feeder Fix: BARIA*    | <br>15 | <br>17 |

=== "RWY 33"
    | STAR       | Jets & DH8D | Non-Jets |
    | ---------- | :------: | :------: |
    | **HENDO A/Q/Y**<br>*ANDOP transition*<br>*BARIA transition*<br>*ISNER transition*<br>*NORMA transition*<br>*OVLET transition*<br>*PUNIT transition*<br>*VEKBI transition*    | <br>21<br>12^<br>12<br>14<br>22<br>20<br>24     | <br>24<br>14^<br>14<br>15<br>25<br>23<br>27     |
    | **KEEWI A**<br>*AVDAN transition*<br>*LOCKA transition*<br>*ZANEY transition*    | <br>23<br>22<br>22     | <br>26<br>26<br>25     |
    | **KEEWI V**<br>*AVDAN transition*<br>*LOCKA transition*<br>*OVLET transition*<br>*ZANEY transition*    | <br>16<br>15<br>16<br>14     | <br>18<br>17<br>18<br>16     |
    | **KEEWI S/X**<br>*AVDAN transition*<br>*LOCKA transition*<br>*OVLET transition*<br>*ZANEY transition*    | <br>18<br>17<br>19<br>17     | <br>21<br>20<br>21<br>19     |
    | **KEEWI Q/Y**<br>*AVDAN transition*<br>*LOCKA transition*<br>*OVLET transition*    | <br>22<br>22<br>21     | <br>25<br>25<br>24     |
    | **TOTTY U/W**<br>*ANDOP transition*<br>*ISNER transition*<br>*NORMA transition*<br>*PUNIT transition*<br>*VEKBI transition*    | <br>19<br>13<br>13<br>19<br>22     | <br>22<br>15<br>15<br>21<br>25     |

### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

### Assumptions
- Nil wind
- The feeder fix for all STARs is the assigned STAR transition waypoint (if applicable), otherwise:
    - The feeder fixes for the NONUM STAR are **MUSEY** and **NORMA** (depending on inbound airway)
    - The feeder fix for the UPOLO STAR is **BARIA**

## Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YBCS"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YBCS"></div>