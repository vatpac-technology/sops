---
  title: Melbourne Flow
---

--8<-- "includes/abbreviations.md"

| Name                                       | ID      | Callsign                | Frequency   | Login ID      |
| ------------------------------------------ | ------- | ----------------------- | ----------- | ------------- |
| **Melbourne Flow :octicons-checklist-24:** | MFL     |                         |             | ML_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as MFL. **BLA(ELW)**, **HUO(WON)**, and **MUN(YWE)** must be staffed, and controllers intending to open MFL must coordinate with them *before* logging on.
	
## Local Knowledge
- Aircraft from the south may be issued the PORTS STAR in lieu of the RAZZI STAR to reduce track miles to runways 09 and 34
- In lieu of a STAR, aircraft from the west may be radar vectored via a right circuit to runway 16 to reduce track miles
- Aircraft via RAZZI or ALAXO may be issued the Mike/Papa STAR to reduce track miles to runway 16
- Aircraft from the northeast may be issued RWY 27 or direct to the IAF of the RNP-M RWY 16 to reduce track miles *(coordination required)*
- LAHSO runway mode will increase arrival rate (see [activation prerequisites](../../terminal/melbourne/#lahso) for specific LAHSO approvals required)

## Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | Arrival | RWY 09 | RWY 16 | RWY 27 | RWY 34 |
    | ---------- | :---: | :--: | :--: | :---: |
    | **ALAXO A STAR**    | 11\^ | 17 | 15 | 12 |
    | **ALAXO P STAR**    | -  | 15 | -  | -  |
    | **ARBEY STAR**      | 11\^ | 9\^  | 12 | 13 |
    | **BOOIN A STAR**    | 15 | 12 | 10\^ | 13 |
    | **BOOIN V STAR**    | -  | -  | -  | 12 |
    | **BOYSE A STAR**    | 16 | 13 | 11 | 14 |
    | **BOYSE V STAR**    | -  | -  | -  | 13 |
    | **PORTS STAR**<br>*ONAGI transition*<br>*TASIS transition*      | <br>13<br>14 | <br>-<br>-  | <br>-<br>-  | <br>9\^<br>9\^  |
    | **RAZZI A/V STAR**  | 16 | 13 | 9\^  | 10\^ |
    | **RAZZI M STAR**    | -  | 11 | -  | -  |
    | **No STAR - Vectors to IAF**<br>*Feeder Fix: MENOG* | <br>10\^ | <br>15 | <br>11\^ | <br>8\^ |


=== "Non-Jets"
    | Arrival | RWY 09 | RWY 16 | RWY 27 | RWY 34 |
    | ---------- | :---: | :--: | :--: | :---: |
    | **ALAXO A STAR**    | 12\^ | 19 | 17 | 14 |
    | **ALAXO P STAR**    | -  | 17 | -  | -  |
    | **ARBEY STAR**      | 12\^ | 10\^ | 14 | 15 |
    | **BOOIN A STAR**    | 17 | 14 | 11\^ | 15 |
    | **BOOIN V STAR**    | -  | -  | -  | 14 |
    | **BOYSE A STAR**    | 18 | 15 | 13 | 16 |
    | **BOYSE V STAR**    | -  | -  | -  | 15 |
    | **PORTS STAR**<br>*ONAGI transition*<br>*TASIS transition*      | <br>15<br>16 | <br>-<br>-  | <br>-<br>-  | <br>10\^<br>11\^  |
    | **RAZZI A/V STAR**  | 18 | 15 | 10\^ | 11\^ |
    | **RAZZI M STAR**    | -  | 13 | -  | -  |
    | **No STAR - Vectors to IAF**<br>*Feeder Fix: MENOG* | <br>12\^ | <br>17 | <br>12\^ | <br>9\^ |

### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the PORTS STAR, ONAGI Transition is **LATTA**
    - The feeder fix for the PORTS STAR, TASIS Transition is **EKKAS**

## Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YMML"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YMML"></div>

## MAESTRO

### Delay Strategy

Enroute delay is prioritised over TMA delay. Arrivals should absorb as much of the required delay as possible before the feeder fix.
MAESTRO may allocate 1 - 2 minutes of delay to the TMA in order to avoid holding.