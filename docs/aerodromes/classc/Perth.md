---
  title: Perth (YPPH)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Perth ADC** | **Perth Tower** | **127.400** | **PH_TWR** |
| **Perth SMC West** | **Perth Ground** | **121.700** | **PH_GND** |
| <span class="indented">Perth SMC East :material-information-outline:{ title="Non-standard position"} | Perth Ground | 122.200 | PH-E_GND |
| **Perth ACD** | **Perth Delivery** | **118.550** | **PH_DEL** |
| **Perth ATIS** |  | **123.800** | **YPPH_ATIS** |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
PH ADC is not responsible for any airspace by default.

## Maneuvering Area Responsibility
The area of responsibility between SMC West and East is divided by Runway 03/21.  
Everything West of the Runway belongs to SMC West, everything East of the Runway belongs to SMC East.

## Runway Selection
### Southwest Plan
With the Southwest Plan active, all departures shall be assigned runway 21. Arrivals will be processed to either runway 21 or 24.

### Northeast Plan
With the Northeast Plan active, departures via `AVNEX`, `OTLED`, `OLMAM`, `SOLUS`, and `OPEGA` shall be assigned runway 03. All other departures shall be assigned runway 06. All arrivals will be processed to runway 03.

### Single Runway Ops
Where excessive crosswind components exist on a runway in the southwest or northeast runway modes, nominate the most into wind runway as a single runway mode.

## Circuit Training
Circuit training traffic shall be issued SSR code and clearance to operate within circuit area not above `A015`. Circuit training is typically conducted on Runway 03/21.

All circuits are to be conducted to the east of Runway 03/21 (right-hand circuit Runway 03).

## Helicopter Operations
There are no helipad facilities at YPPH. Helicopters should be issued an airways clearance in accordance with the fixed-wing operation applicable to their flight rules (i.e. SID for IFR helicopters, VFR departure via appropriate VFR route if necessary for VFR helicopters). Helicopters should be cleared to takeoff/land from runways or taxiways, as deemed appropriate by ADC. The point of takeoff/landing must be specified by ADC.

!!! phraseology
    **PH ADC:** "YOE, taxiway Romeo, cleared to land"  

    **PH ADC:** "HWD, runway 21, cleared for takeoff"

## Scenic Flights
When traffic permits, VFR scenic flights over Perth are cleared via VICTOR 65 route (`CTE-PCTY-HKE`). Coordination with PH TCU is required prior to issuing this clearance, see [ACD to PH TCU](#acd-to-ph-tcu).

## ATIS
### Approach Type
With the [Southwest Plan](#southwest-plan) active, the ATIS shall notify `EXP ILS APCH`.

With the [Northeast Plan](#northeast-plan) active, the ATIS shall notify `EXP ILS APCH` only in the following conditions:

- By night; and/or  
- Cloud base of `A032` or below

### Runway Nomination
When both Runway 03 and Runway 06 are nominated as departure runways, the `RWY` field shall contain:  
`RWY 03 FOR DEP VIA OTLED, AVNEX, OLMAM, SOLUS AND OPEGA. RWY 06 FOR ALL OTHER DEP.`

## Coordination
### Auto Release
[Next](../../controller-skills/coordination.md#next) coordination is **not** required for aircraft that are:   

- Departing from a runway nominated on the ATIS; and  
- Assigned the standard assignable level; and  
- Assigned a **Procedural SID**

All other aircraft require a 'Next' call to PH TCU.

The Standard Assignable level from PH ADC to PH TCU is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `A050` and `RFL` |

### Departures Controller
Refer to [Perth TCU Airspace Division](../../../terminal/perth/#airspace-division) for information on airspace divisions when **PHD** is online.

### ACD to PH TCU
The controller assuming responsibility of ACD shall give [heads-up](../../controller-skills/coordination.md#airways-clearance) coordination to the relevant PH TCU controller prior to the issue of the following clearances:  

- VFR departures into PH TCU CTA
- Aircraft using a runway not on the ATIS 