---
  title: Townsville TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Townsville Approach**    | **Townsville Approach**   | **126.800**         | **TL_APP**                                   |

## Airspace
### TCU
TL TCU owns the Class C and G airspace within 36 DME TL from `SFC` to `F180`

<figure markdown>
![TL TCU/ADC Airspace Structure](img/tltcu.png){ width="2000" }
  <figcaption>TL ADC/TCU Airspace Structure</figcaption>
</figure>

### ADC
TL ADC owns the Class C airspace in the TL CTR (Extends to 7NM from the thresholds of Runway 01/19) from `SFC` to `A015`. This airspace is designed to facilitate Helicopter Traffic and Ciruit Traffic.

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Flow
### Local Knowledge
- Aircraft may be assigned the Papa STAR to reduce track miles
- During VMC by day, aircraft may be instructed to track for a visual base to either runway
- With RWY 01 in use, small non-jet aircraft may be processed to RWY 07 via either a VSA or RNP

### Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"

    | STAR         | RWY 01 | RWY 19 |
    | ------------ | :----: | :----: |
    | **IBUXI A**  | 16     | -      |
    | **IBUXI Z**  | -      | 11^    |
    | **IGIKI A**<br>*Feeder Fix: 36 DME TL*  | <br>14    | <br>-     |
    | **POROB A**  | 13     | -      |
    | **POROB B**  | -      | 13     |
    | **POROB P**  | 11^    | 11^    |
    | **POROB Z**  | -      | 13     |
    | **VOMPA A**  | 10^    | -      |
    | **VOMPA B**  | -      | 15     |
    | **VOMPA P**  | 10^    | 13     |
    | **VOMPA Z**  | -      | 15     |

=== "Non-Jets"

    | STAR         | RWY 01 | RWY 19 |
    | ------------ | :----: | :----: |
    | **IBUXI A**  | 19     | -      |
    | **IBUXI Z**  | -      | 12^    |
    | **IGIKI A**<br>*Feeder Fix: 36 DME TL*  | <br>16     | <br>-     |
    | **POROB A**  | 14     | -      |
    | **POROB B**  | -      | 15     |
    | **POROB P**  | 12^    | 13^    |
    | **POROB Z**  | -      | 14     |
    | **VOMPA A**  | 11^    | -      |
    | **VOMPA B**  | -      | 17     |
    | **VOMPA P**  | 11^    | 15     |
    | **VOMPA Z**  | -      | 16     |

#### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

#### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the IGIKI STAR is 36 DME TL (where it intersects with the STAR track)

### Calculator
<script type="module" src="../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YBTL"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YBTL"></div>

## Coordination
### Enroute
#### Departures
Voiceless for all aircraft:

- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F180` or the `RFL`

All other aircraft going to TBP CTA must be **Heads-up** Coordinated by TL TCU prior to the boundary.

!!! phraseology
    <span class="hotline">**TL TCU** -> **TBP**</span>: "JST729, with your concurrence, will be assigned `F160`, for my separation with QLK327D"  
    <span class="hotline">**TBP** -> **TL TCU**</span>: "JST729, concur `F160`"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YBTL**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from TBP CTA will be **Heads-up** Coordinated to TL TCU.

### ADC
#### Airspace
TL ADC owns the Class C airspace in the TL CTR from `SFC` to `A015`.

#### Auto Release  
[Next](../controller-skills/coordination.md#next) coordination is **not** required from TL ADC to TL TCU for aircraft that are:  

- Departing from a runway nominated in the ATIS; and  
- Assigned the standard assignable level; and 
- Assigned a **Procedural** SID 

The Standard Assignable level from TL ADC to TL TCU is:

| Aircraft | Level |
| ------ | ------- |
| All | The lower of `F180` and `RFL` |