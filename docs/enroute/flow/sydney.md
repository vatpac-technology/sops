---
  title: Sydney Flow
---

--8<-- "includes/abbreviations.md"

| Name                                      | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Sydney Flow :octicons-checklist-24:**   | SFL     |                         |             | SY_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as BFL. **GUN(BIK)**, **MNN(OCN)**, and **ARL** must be staffed, and controllers intending to open SFL must coordinate with them *before* logging on.

## Local Knowledge
- Aircraft can be processed via the adjacent STAR for the parallel runway (e.g. jet aircraft via the AKMIR STAR for RWY 34R), to reduce overall delay where multiple aircraft approach from the same direction *(coordination required)*
- Aircraft via AKMIR (to the west) and MARLN (to the east) often make large track direction changes prior to entering the TMA. Direct tracking onto the STAR may be offered to reduce track miles
- Aircraft to YSWS via UNTAV may be assigned the **UNTAV B** STAR in lieu of the **UNTAV A** STAR, for track shortening or separation, **when the [R481 COLO restricted area](../../terminal/sydney/#r481-colo) is not activated**.
- Aircraft to YSWS may be assigned the RNP X to reduce track miles on some STARs
- Aircraft to YSWS may be tactically assigned the **GUDOK N** STAR in lieu of the REVKI N STAR by **SWA**, for track shortening or separation.

## Flow Tables
### YSSY
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | STAR                             | RWY 07  | RWY 16L | RWY 16R | RWY 25  | RWY 34L | RWY 34R |
    | -------------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
    | **AKMIR**                        | 10      | 16      | 14      | 14      | 14      | 16      |
    | **BOREE A/P**                    | 11      | 8\^     | 7\^     | 11      | 14      | 14      |
    | **MEPIL**<br>*Feeder Fix: YAKKA* | <br>12  | <br>8\^ | <br>8\^ | <br>11  | <br>14  | <br>14  |
    | **MARLN**                        | 12      | 13      | 13      | 8\^     | 14      | 11      |
    | **RIVET**<br>*Feeder Fix: ENLAD* | <br>10  | <br>16  | <br>14  | <br>14  | <br>13  | <br>16  |

=== "Non-Jets"
    | STAR                             | RWY 07  | RWY 16L | RWY 16R | RWY 25  | RWY 34L | RWY 34R |
    | -------------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
    | **AKMIR**                        | 13      | 22      | 18      | 19      | 19      | 22      |
    | **BOREE A/P**                    | 15      | 10\^    | 10\^    | 14      | 18      | 18      |
    | **MEPIL**<br>*Feeder Fix: YAKKA* | <br>14  | <br>11\^| <br>11\^| <br>14  | <br>19  | <br>18  |
    | **MARLN**                        | 14      | 17      | 18      | 11\^    | 19      | 15      |
    | **RIVET**<br>*Feeder Fix: ENLAD* | <br>13  | <br>21  | <br>18  | <br>19  | <br>18  | <br>21  |

##### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

#### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the MEPIL STAR is **YAKKA**
    - The feeder fix for the RIVET STAR is **ENLAD**
- Aircraft for the *opposite* parallel runway (eg, AKMIR to 16L/34R) will overfly the field, then vectored to a mid-field downwind  
- All aircraft are tracking via the ILS Initial Approach fix

### YSWS
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | STAR                               | RWY 05  | RWY 23  |
    | ---------------------------------- | :-----: | :-----: |
    | **BIKUS A**                        | 16      | 15      |
    | **REVKI A/N**                      | 7\^     | 11      |
    | **RIKNI N**<br>*Feeder Fix: MARLN* | <br>18  | <br>15  |
    | **UNTAV A**                        | 14      | 7\^     |
    | **UNTAV B**                        | 12      | -       |
    | **UNTAV N**                        | 13      | -       |
    | **UNTAV Q**                        | 14      | -       |
    | **GODUK N**                        | -       | 5\^     |

=== "Non-Jets"
    | STAR                               | RWY 05  | RWY 23  |
    | ---------------------------------- | :-----: | :-----: |
    | **BIKUS A**                        | 21      | 19      |
    | **REVKI A/N**                      | 10\^    | 14      |
    | **RIKNI N**<br>*Feeder Fix: MARLN* | <br>24  | <br>20  |
    | **UNTAV A**                        | 19      | 9\^     |
    | **UNTAV B**                        | 16      | -       |
    | **UNTAV N**                        | 17      | -       |
    | **UNTAV Q**                        | 18      | -       |
    | **GODUK N**                        | -       | 7\^     |

#### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

#### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the RIKNI STAR is **MARLN**
- All aircraft are tracking via the ILS

## YSSY Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YSSY"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YSSY"></div>

## YSWS Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YSWS"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YSWS"></div>

## MAESTRO

### Feeder Fix selection

`BOREE`, `YAKKA`, and `MARLN` feeder fixes have been configured to allocate arrivals to `16L` or `34R` during parallel operations.

If an aircraft cannot accept this allocation, ENR may move them to `16R` or `34L` without coordinating with SFL.
This should be done at least 30 mins prior to `ETA_FF` to avoid changing the stable sequence.

### Delay Strategy

Enroute delay is prioritised over TMA delay.
Arrivals should absorb as much of the required delay as possible before the feeder fix.
MAESTRO may allocate 1 - 2 minutes of delay to the TMA in order to avoid holding.

Delay can be absorbed within the TMA by extending the downwind legs of the approach.

### Views

**FLO_RWY** uses a custom label layout displaying:
- callsign and wake category coloured by feeder fix (**<span style="color: rgb(96, 0, 0); background-color: rgb(160, 170, 170);">ENLAD / AKMIR</span>**, **<span style="color: rgb(0, 105, 0); background-color: rgb(160, 170, 170);">BOREE / YAKKA</span>**, **<span style="color: rgb(0, 235, 235); background-color: rgb(160, 170, 170);">MARLN</span>**)
- total required delay coloured by state
- total remaining delay, coloured by state