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

## VFR Inbound Procedures

| VFR Approach Point | RWYs 29  | RWYs 11 |
| ----------------| --------- | ---------- |
| Prospect Reservoir (PSP)    | Join right downwind, maintain A015 (Abeam RWYs 11 threshold or clear of departing traffic), cleared visual approach       | Join final or Join upwind at or below A010        |
| 2RN (TWRN)   | Join right crosswind, maintain A015 (Abeam RWYs 11 threshold or clear of departing traffic), cleared visual approach | Join final, report at Warwick Farm at or below A010  |

## Circuits
The circuit direction changes depending on time of day and runway being used.

| Runway | Day  | Night |
| ----------------| --------- | ---------- |
| 11L    | Left       | -        |
| 11C   | Left | Right  |
| 11R    | Right | -  |
| 29L     | Left        | -  |
| 29C    | Right | Left         |
| 29R    | Right        | -  |

Circuits to be flown at A010

## ATIS
#### Operational Info

ATIS broadcast for runway shall follow the format: 
`RWY 11L (or 29R) FOR ARRIVALS AND DEPARTURES; RWY 11R (or 29L) FOR CIRCUIT TRAINING; RWY 11C (or 29C) IN USE`  
When the crosswind component exceeds 15 knots, include in the ATIS: 
`CROSSWIND ALERT – DO NOT PASS THROUGH FINAL FOR YOUR ASSIGNED RUNWAY`

## Coordination
### BK SMC / SY TCU

#### Taxi Call

Whilst the aircraft is taxiing, the Ground Controller Coordinate with the controller responsible for SDS who will issue their airways clearance.
!!! example
    **BK SMC** -> **SY TCU**: "Taxi's, UJN, Dubbo, 29C”  
    **SY TCU** -> **BK SMC**: “UJN, Cleared to Dubbo via KADOM Flight Planned Route, Bankstown 8 Departure, Climb via SID A030, Squawk 3342”  
    **BK SMC** -> **SY TCU**: “Cleared to Dubbo via KADOM Flight Planned Route, Bankstown 8 Departure, Climb via SID A030, Squawk 3342, UJN”  


### BK ADC / SY TCU

#### Next Call

Tower will now coordinate with the relevant Class C sector above them for permission to release the aircraft into their CTA.

!!! example
    **BK ADC** -> **SY TCU**: "Next, UJN, 29C”  
    **SY TCU** -> **BK ADC**: “UJN, Unrestricted"

!!! information
    Keep in mind some Class D aerodromes only allow 1 IFR aircraft in the CTR at any one time so Approach Centre Controllers will either approve or deny the release of the aircraft until there is a slot available for them.

Once the aircraft is clear of the Class D CTR either vertically or laterally the tower controller will tell them to contact the relevant frequency. 

### SY TCU / BK TWR

#### Arrival Coordination

SY TCU will coordinate with BK ADC for incoming IFR arrivals on either Visual Tracking, RNP or NDB approaches

##### Visual Tracking

!!! example
    **SY TCU** -> **BK ADC**: “Estimate, UJN via TWRN time 02.”  
    **BK ADC** -> **SY TCU**: “UJN” 

##### IAP Tracking

!!! example
    **SY TCU** -> **BK ADC**: “Estimated Approach Time, UJN via RNP at time 59”  
    **BK ADC** -> **SY TCU**: “via RNP, UJN”   
    **BK Tower Must Clear Aircraft for Final, before SY TCU issues approach clearance.**  
    **SY TCU** -> **BK ADC**: “Request clearance for final, UJN”  
    **BK ADC** -> **SY TCU**: “UJN Cleared RNP 11C” 
    **SY TCU** -> **BK ADC**: “Cleared RNP 11C, UJN”  

### SDS / SY TCU

#### Miscellaneous

If departure is Runway 11 into CTA, coordination is required with Director (or SDS) if open, as the "Half a Radar Sep Standard From Sector Boundary" rule.

!!! Example
    **SDS** -> **SY TCU**: “Request left turn our of Bankstown”  
    **SY TCU** -> **SDS**: "Approved" (no callsigns need be used here)  

## Standard Assignable Levels

All IFR Aircraft: `A030`