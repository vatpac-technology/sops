---
  title: Bankstown (YSBK)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Bankstown ADC**  | **Bankstown Tower**  | **132.800**          | **BK_TWR**                        |
| **Bankstown SMC**   | **Bankstown Ground**   | **119.900**          | **BK_GND**                       |
| Bankstown ATIS        |                | 120.900          | YSBK_ATIS                                |

 
In the absence of an SMC controller, ADC shall assume the SMC responsibilities.
<figure markdown>
![YSBK Maneuvering Area](img/ysbk_maneuvring_area.png){ width="500" }
  <figcaption>Maneuvering Area</figcaption>
</figure>

## Airspace
Tower airspace is defined as between SFC to 1500 FT.

<figure markdown>
![Bankstown Tower Airspace](img/BKTWR.png){ width="700" }
  <figcaption>Bankstown Tower Airspace</figcaption>
</figure>

## Fixed-Wing Operations
### VFR Inbound Procedures
VFR aircraft will report inbound at `PSP` or `TWRN` at `A015` (when RWY 29s are in use) or `A010` (when RWY 11s are in use).  They should be instructed to join the circuit as below:

| VFR Approach Point | RWYs 29  | RWYs 11 |
| ----------------| --------- | ---------- |
| Prospect Reservoir (PSP)    | *"Join right downwind runway 29R, maintain A015"*, then when abeam RWYs 11 threshold or clear of departing traffic, *"Cleared visual approach"*       | *"Join final runway 11L, report 3nm"*        |
| 2RN (TWRN)   | *"Join crosswind runway 29R, maintain A015"*, then when abeam RWYs 11 threshold or clear of departing traffic, *"Cleared visual approach"* | *"Join final runway 11L, report at Warwick Farm"*  |

!!! note
    Aircraft joining final in the RWY 11 direction are not assigned a level and are expected to commence a visual approach in accordance with the tracking instructions issued by TWR.  There is no need to clear these aircraft for a visual approach.

### VFR Outbound Procedures
VFR aircraft should report ready to **BK ADC** with their departure intentions.  A takeoff clearance constitutes a clearance to depart the zone by extending the pilot's requested leg of the circuit.  Aircraft departing the zone into class G airspace will transfer to area frequency upon leaving the zone, **no explicit frequency transfer is given to these aircraft**.

Aircraft departing a leg of the circuit will climb to and maintain the following levels until clear of the zone:  
RWY 29 direction: `A010`  
RWY 11 direction: `A015`

### Circuits
The circuit direction changes depending on time of day and runway being used.

| Runway | Day  | Night |
| ----------------| --------- | ---------- |
| 11L    | Left       | -        |
| 11C   | Left | Right  |
| 11R    | Right | -  |
| 29L     | Left        | -  |
| 29C    | Right | Left         |
| 29R    | Right        | -  |

Circuits to be flown at `A010`

## Helicopter Operations
### Inbound Procedures
Reserved.
### Outbound Procedures
Reserved.
### Circuits
Reserved.

## ATIS
### Runway Nomination
The ATIS must indicate the current runway config and nominate what each parallel runway is being used for.  The northern runway (11L/29R) is primarily used for VFR arrivals and departures, the southern runway (11R/29L) for circuit training, and the centre runway for IFR arrivals/departures and VFR overflow.  

This should be reflected on the ATIS as below:  
`RWY 11L FOR ARRIVALS AND DEPARTURES; RWY 11R FOR CIRCUIT TRAINING; RWY 11C IN USE`
### Operational Info
When the crosswind component exceeds 15 knots, the OPR INFO field must include:  
`CROSSWIND ALERT – DO NOT PASS THROUGH FINAL FOR YOUR ASSIGNED RUNWAY`

## Coordination
### BK SMC / SY TCU

#### Taxi Call

Whilst the aircraft is taxiing, the Ground Controller Coordinate with the controller responsible for SDS who will issue their airways clearance.
!!! example
    **BK SMC** -> **SY TCU**: "Taxis UJN, for Dubbo, runway 29C"  
    **SY TCU** -> **BK SMC**: "UJN, cleared to Dubbo via KADOM flight planned route, Bankstown 8 departure, climb via SID A030, squawk 3342"  
    **BK SMC** -> **SY TCU**: "Cleared to Dubbo via KADOM flight planned route, Bankstown 8 departure, climb via SID A030, squawk 3342, UJN" 


### BK ADC / SY TCU

#### Next Call

Tower will now coordinate with the relevant Class C sector above them for permission to release the aircraft into their CTA.

!!! example
    **BK ADC** -> **SY TCU**: "Next, UJN, runway 29C"  
    **SY TCU** -> **BK ADC**: "UJN, unrestricted"

!!! information
    Due to the size of the CTR, only one IFR aircraft can occupy the airspace at any one time.  This includes aircraft established inbound on an instrument approach, even if they're not yet in the CTR.  Due to this, there may be a delay between a 'Next' call and the TCU controller releasing that aircraft.

### SY TCU / BK TWR

#### Arrival Coordination

SY TCU will coordinate with BK ADC for incoming IFR arrivals on either Visual Tracking, RNP or NDB approaches.

##### Visual Tracking

!!! example
    **SY TCU** -> **BK ADC**: "Estimate, UJN via TWRN time 02."  
    **BK ADC** -> **SY TCU**: "UJN"

##### IAP Tracking

!!! example
    **SY TCU** -> **BK ADC**: "Estimated approach time, UJN via RNP at time 59"  
    **BK ADC** -> **SY TCU**: "Via RNP, UJN"   
    *BK Tower must clear aircraft for final, before SY TCU issues approach clearance.*  
    **SY TCU** -> **BK ADC**: "Request clearance for final, UJN"  
    **BK ADC** -> **SY TCU**: "UJN cleared RNP 11C" 
    **SY TCU** -> **BK ADC**: "Cleared RNP 11C, UJN"  

### SDS / SY TCU

#### Miscellaneous

If departure is Runway 11 into CTA, coordination is required with Director (or SDS) if open, as the "Half a Radar Sep Standard From Sector Boundary" rule.

!!! Example
    **SDS** -> **SY TCU**: “Request left turn our of Bankstown”  
    **SY TCU** -> **SDS**: "Approved" (no callsigns need be used here)  

## Standard Assignable Levels

All IFR Aircraft: `A030`