---
  title: Perth Flow
---

--8<-- "includes/abbreviations.md"

| Name                                      | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Perth Flow :octicons-checklist-24:**    | PFL     |                         |             | PH_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as PFL. **HYD** must be staffed, and controllers intending to open PFL must coordinate with them *before* logging on.
	
## Local Knowledge
- Aircraft can be assigned the Xray or Victor STAR to reduce track miles
- Aircraft for RWY 21 can be radar vectored to the opposite side arc IAF to increase track miles in the TMA

## Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets"
    | STAR       | RWY 03 | RWY 06 | RWY 21 | RWY 24 |
    | ---------- | :-----: | :-----: | :-----: | :-----: |
    | **IPMOR A**<br>*Feeder Fix: KAGMI*    | <br>17     | <br>14     | <br>15     | <br>17     |
    | **JULIM A**    | 17     | 19     | 10^    | 10^    |
    | **JULIM V**    | 15     | 16     | -      | -      |
    | **JULIM X**    | 15     | -      | -      | -      |
    | **KABLI A**    | 15     | 16     | 15     | 15     |
    | **KABLI V**    | 13     | 14     | -      | -      |
    | **KABLI X**    | 13     | -      | -      | -      |
    | **SOLUS A**    | 11^    | 12     | 14     | 12^    |
    | **SOLUS V**    | 10^    | 11^    | -      | -      |
    | **SOLUS X**    | 10^    | -      | -      | -      |
    | **No STAR - Vectors to IAF**<br>*Feeder Fix: OLMAM* | <br>9\^ | <br>10\^ | <br>13 | <br>14 |

=== "DH8D"
    | STAR       | RWY 03 | RWY 06 | RWY 21 | RWY 24 |
    | ---------- | :-----: | :-----: | :-----: | :-----: |
    | **DAYLR A**    | 12^    | 13     | -      | -      |
    | **DAYLR V**    | 10^    | 11^    | -      | -      |
    | **DAYLR X**    | 10^    | -      | -      | -      |
    | **IPMOR A**<br>*Feeder Fix: KAGMI*    | <br>17     | <br>14     | <br>15     | <br>17     |
    | **LAVEX A**    | 16     | 17     | 14     | 13     |
    | **LAVEX V**    | 14     | 14     | -      | -      |
    | **LAVEX X**    | 13     | -      | -      | -      |
    | **SAPKO A**    | 18     | 19     | 10^    | 10^    |
    | **SAPKO V**    | 15     | 16     | -      | -      |
    | **SAPKO X**    | 15     | -      | -      | -      |
    | **SOLUS A**    | 11^    | 12     | 14     | 12^    |
    | **SOLUS V**    | 10^    | 11^    | -      | -      |
    | **SOLUS X**    | 10^    | -      | -      | -      |
    | **No STAR - Vectors to IAF**<br>*Feeder Fix: OLMAM* | <br>9\^ | <br>10\^ | <br>13 | <br>14 |

=== "Non-Jets"
    | STAR       | RWY 03 | RWY 06 | RWY 21 | RWY 24 |
    | ---------- | :-----: | :-----: | :-----: | :-----: |
    | **DAYLR A**    | 13^    | 15     | -      | -      |
    | **DAYLR V**    | 12^    | 13^    | -      | -      |
    | **DAYLR X**    | 11^    | -      | -      | -      |
    | **IPMOR A**<br>*Feeder Fix: KAGMI*    | <br>19     | <br>16     | <br>17     | <br>20     |
    | **LAVEX A**    | 18     | 20     | 16     | 15     |
    | **LAVEX V**    | 15     | 16     | -      | -      |
    | **LAVEX X**    | 15     | -      | -      | -      |
    | **SAPKO A**    | 20     | 22     | 11^    | 11^    |
    | **SAPKO V**    | 17     | 18     | -      | -      |
    | **SAPKO X**    | 17     | -      | -      | -      |
    | **SOLUS A**    | 12^    | 14     | 16     | 14^    |
    | **SOLUS V**    | 12^    | 13^    | -      | -      |
    | **SOLUS X**    | 11^    | -      | -      | -      |
    | **No STAR - Vectors to IAF**<br>*Feeder Fix: OLMAM* | <br>11\^ | <br>12\^ | <br>14 | <br>16 |

### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the IPMOR STAR is **KAGMI**
- Aircraft on the SOLUS STAR to RWY 21/24 will be vectored from MOCUR to the IAF for ILS
- Aircraft on the IPMOR STAR to RWY 24 will be vectored from WOOFY to the IAF for the ILS
- Aircraft for RWY 21 via the OLMAM feeder fix will be processed via **WOOFY** for the ILS (via the 9nm arc)

### Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YPPH"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YPPH"></div>

## MAESTRO

### Delay Strategy

Enroute delay is prioritised over TMA delay. Arrivals should absorb as much of the required delay as possible before the feeder fix.
MAESTRO may allocate 1 - 2 minutes of delay to the TMA in order to avoid holding.