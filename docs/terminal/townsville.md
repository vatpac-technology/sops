---
  title: Townsville TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                          | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Townsville Approach**       | **TLA** | **Townsville Approach** | **126.800** | **TL_APP**    |

!!! note
    Townsville TCU is a [joint military/civil TCU](../../controller-skills/military/#military-aerodromes) and procedures can differ significantly to those in a civil TCU. Ensure you are familiar with the [military controller skills](../../controller-skills/military) necessary to provide a quality service.

## Airspace
TL TCU owns the Class C and G airspace within 36 DME TL from `SFC` to `F180`

<figure markdown>
![TL TCU Structure](img/tl_tcu.png){ width="952" }
  <figcaption>TL TCU Structure</figcaption>
</figure>

### TL ADC
TL ADC owns the Class C airspace in the TL MIL CTR `SFC` to `A015`. 

### Restricted Area Activations
There are no [restricted areas or MOAs](../../controller-skills/sua) activated by default when TLA is online.

#### SUA in Enroute Airspace
Military operations taking place in SUA in enroute airspace are outside the jurisdiction of TL TCU.

Upon receiving [airways clearance coordination from ACD](#acd-to-tl-tcu) of an aircraft intending to operate in a currently inactive SUA in enroute airspace, TL TCU must give **heads up** coordination to relevant enroute controllers.

This gives the enroute controller sufficient time to assess the request, make necessary adjustments to any aircraft in the area currently, and activate the SUA; or alternately to refuse the activation request before the aircraft is in the air.

!!! phraseology
    *PTHR11 is requesting clearance to operate in the R560A restricted area.*  
    <span class="hotline">**TL ACD** -> **TLA**</span>: "PSSM31 requests clearance to M742”  
    <span class="hotline">**TLA** -> **TL ACD**</span>: "Standby, call you back."  
    
    <span class="hotline">**TLA** -> **TBP**</span>: "On the groud YBTL, PSSM31, requests activation of M742 `A040-F240`, from 0300 until 0500.”  
    <span class="hotline">**TBP** -> **TLA**</span>: "PSSM31, expect activation of M742 `A040-F240` at 0300 until 0500."   
    <span class="hotline">**TLA** -> **TBP**</span>: "PSSM31."   
    
    <span class="hotline">**TLA** -> **TL ACD**</span>: "PSSM31, clearance approved."   
    <span class="hotline">**TL ACD** -> **TLA**</span>: "Clearance approved, PSSM31"  

!!! note
    The requirement to coordinate activation of an SUA is in **addition** to existing coordination requirements. [**Heads-up** coordination](#departures) is still required for these aircraft if they do not meet the voiceless coordination criteria.

## Local Procedures
### Initial and Pitch
The [intial points](../../controller-skills/military/#initial-and-pitch) are 5NM from the ARP, displaced 1,000 feet laterally to the dead side of the runway, `A025`.

Aircraft arriving Runway 19 should be assigned either a **left initial** or **right initial**; a straight initial is not available due to high terrain over Magnetic Island.

Aircraft arriving Runway 01 should be assigned either a **left initial**, **standard right initial**, or **close right initial**. On a close right initial aircraft will track north of Mt Stuart, as opposed to aircraft tracking on a standard right initial, who pass Mt Stuart to the south.

### Military Gates
There are numerous [military gates](../../controller-skills/military/#military-gates) established throughout the WLM TCU to facilitate entry and exit to adjoining SUA.

<figure markdown>
![TL SUA Gates](img/tl_mil_gates.png){ width="700" }
  <figcaption>TL SUA Gates</figcaption>
</figure>

!!! phraseology
    *RPLC15 plans to enter the M581 MOA via Gate 7 for military training and airwork.*  
    **RPLC15**: "Willy Delivery, RPLC15 for Gate 7, `F120` for M581, request clearance."   
    **WLM ACD**: "RPLC15, Willy Delivery. Cleared Gate 7, Classic departure. Climb via SID to `F120`, squawk 6001, departure frequency 135.7."   
    
If the pilot **does not** nominate a gate, or nominates a gate that does not provide access to their intended SUA, WLM ACD should clear the aircraft to depart via the **appropriate gate**.

| Intended SUA    | TCU Exit Gate       |
| --------------- | ------------------- |
| D745            | 
| M742            |
| R736            |
| R738A-F         |
| R738G-H         |
| R732            |
| R739            |
| R747            |
| R751            |
| R752            |
| R768A-B         |

!!! tip
    [Coordination requirements](#acd-to-tl-tcu) exist between ACD and TCU when aircraft are requesting clearance to operate in an SUA that has not been activated. Controllers performing the role of ACD should ensure they coordinate with TCU before providing clearance

### Special Use Airspace
#### D764 Townsville 

#### M742 Tiger

#### R732 Greenvale Training Area

#### R736 Townsville (Star)

#### R738A-H Townsville (Land)

#### R739 Townsville (Star)

#### R747 Rattlesnake Island

#### R751 Townsville (High Range)

#### R752 Townsville (High Range)

#### R768A-B Mt Stuart

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
    <span class="hotline">**TLA** -> **TBP**</span>: "JST729, with your concurrence, will be assigned `F160`, for my separation with QLK327D"  
    <span class="hotline">**TBP** -> **TLA**</span>: "JST729, concur `F160`"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YBTL**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from TBP CTA will be **Heads-up** Coordinated to TL TCU.

### TL ADC
#### Airspace
TL ADC owns the Class C airspace in the TL CTR from `SFC` to `A015`.

#### Auto Release  
[Next](../controller-skills/coordination.md#next) coordination is **not** required from TL ADC to TL TCU for aircraft that are:  

- Departing from a runway nominated in the ATIS; and  
- Assigned the standard assignable level; and 
- Assigned a **Procedural** SID 

All other aircraft require a 'Next' call to TL TCU.

The Standard Assignable level from TL ADC to TL TCU is:

| Aircraft | Level |
| ------ | ------- |
| All | The lower of `F180` and `RFL` |

#### ACD to TL TCU
The controller assuming responsibility of **ACD** shall give [heads-up](../../controller-skills/coordination/#airways-clearance) coordination to TLA (or the enroute controller responsible for the TL TCU) prior to the issue of a clearance to an aircraft intending to operate in an SUA that **has not** been activated. 

!!! phraseology
    <span class="hotline">**TL ACD** -> **TLA**</span>: "PSSM31 requests clearance to M742”  
    <span class="hotline">**TLA** -> **TL ACD**</span>: "PSSM31, clearance approved."
    

## Charts
!!! abstract "Reference"
     In addition to the civilian `ERSA` and `AIP` publications, [the RAAF AIP website](https://ais-af.airforce.gov.au/australian-aip){target=new} contains the necessary charts (available in the TERMA) and description of procedures (in each airports' FIHA).