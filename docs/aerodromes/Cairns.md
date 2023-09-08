---
  title: Cairns (YBCS)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Cairns ADC    | Cairns Tower   | 124.900          |  CS_TWR                 |
| Cairns SMC    | Cairns Ground   | 121.700          |  CS_GND               |
| Cairns ACD    | Cairns Delivery   | 128.750          |  CS_DEL                  |
| Cairns ATIS        |                | 131.100          | YBCS_ATIS                                |

## Airspace
CS ADC is responsible for the Class C Airspace within the CS CTR `SFC` to `A010`.

<figure markdown>
![CS ADC Airspace](img/csadc.png){ width="700" }
  <figcaption>CS ADC Airspace</figcaption>
</figure>


### Trinity Release
During **Daytime Hours Only**, CS ADC may request the *Trinity Release* from CS TCU, consisting of the airspace displayed below.

The Trinity Release may be used to facilitate low-level VFR and helicopter movements in CTA east of the 15/33 centreline.

Departing aircraft shall be transferred to TCU after ADC no longer has separation requirements.  

<figure markdown>
![Trinity Release](img/TRI.jpg){ width="700" }
  <figcaption>Trinity Airspace Release</figcaption>
</figure>

## Taxiway Restrictions
Taxiways A2 and A between A2 and A3 are not available to Aircraft above 7,000 kilograms. Taxiway A4 is not available to Aircraft above 90,000 kilograms. Taxiway Y is not available to aircraft above 10,000 kilograms.

## Runway Selection
The preferred Runway direction is Runway 15 

## Separation

### Reciprocal Runway Operations
Prior to issuing departure instructions and until the departing aircraft is airborne and another method of separation is applied, TCU shall ensure that the arriving aircraft is:  
a) assigned a level above and vertically separated from the assigned level of the departure and be at a distance which permits uninterrupted profile descent without loss of radar separation;  
b) be confined to a square base leg to join not less than a 10 mile final; or  
c) confined to a procedurally separated clearance  

The above does not apply if tower accepts responsibility for separation.

!!! Note
    The ADC may not accept responsibility for separation when a jet aircraft is departing Runway 33.

### ADC Separation Responsibility
When weather conditions are suitable, ADC shall visually separate:  
a) Left downwind with straight-in final for Runway 15 within 5 Miles;  
b) Right downwind with final for runway 33 within 5 Miles:  
c) Right circuit for Runway 33  
d) Aircraft departing to the Western VFR Corridor from all arriving aircrafton or east of the extended centreline until the aircraft is established in the Corridor.

!!! Note 
    ADC shall advise TCU when this separation cannot be applied

## Departures

### IFR Departures
IFR aircraft shall be processed via one of the following SIDs:

a) RWY 15, Jets via SWIFT: SWIFT SID. Non-Jets via NONUM: NONUM SID  
b) RWY 33, All Jets: EAZEE SID, Radar Transition  
c) All others: CS (RADAR) SID  

!!! Note
    Non-jet aircraft may be issued a Visual Departure.

### Assignable Heading Range
| Runway | Heading |
| ----------------- | ---------------|
| 15                | 350° to 030°   |
| 33                | 330° to 070° |

### Minimum IMC Levels
Lowest assignable level in IMC for assigned heading is:

| Runway | Jet | Non-Jet|
| ------ | -------- | -------|
| 15     | `A030` | `A020`, between 350° to 030° |
| 33     | `A040`, between 330° to 009°.  `A030`, all other headings | `A040`, between 330° to 009°.  `A020`, between 010° to 060°.  `A024`, between 061° to 070° |

<figure markdown>
![Min IMC Levels](img/IMCminlvl.png){ width="700" }
  <figcaption>Minimum IMC Levels</figcaption>
</figure>

## VFR Operations

### Western VFR Corridor
Clearances for aircraft entering the CTR must be worded so as to leave no possibility for misinterpretation by the pilot.

!!! Example
    **NDR**: "Cairns Tower, NDR, EDT, A015, for the Western VFR Corridor, Request Clearance"  
    **CS ADC**: "NDR, enter the CTR tracking via the Western VFR corridor at A015. Remain on the corridor until advised."

If a clearance limit is associated with the clearance, then it must be reiterated to the pilot to remain “on or west of the VFR Corridor”

!!! Example
    **NDR**: "Cairns Tower, NDR, EDT, A015, for the Western VFR Corridor, Request Clearance"  
    **CS ADC**: "NDR, enter the CTR tracking via the Western VFR Corridor at A015. Clearance limit is ADI, Remain on or west of the Western VFR Corridor at all times."

### Inbound
ACFT planning to enter the CS CTR between: *Mt Gorton*, CGF and Upolo Cay at `A005`, must contact CS ADC for airways clearance

!!! Example
    **NDR**: "Cairns Tower, NDR, Cape Grafton, A005, Inbound, Information Alpha, Request Clearance"  
    **CS ADC**: "NDR, enter the CTR tracking for a Right Base runway 33, A005."

### Circuit Direction
| Runway | Direction |
| ----------------- | ---------------|
| 15                | Left  |
| 33                | Right |

## ATIS
### Approach Types
**Approach Expectation shall be `Expect Instrument Approach` when:**

| Time           | Runway 15     | Runway 33                             |
| ------| -------------- | -------------------------------------|
| Day   | Conditions do not meet requirements for CS 360-R Creek Corridor Procedure – NAP2 (VMC conditions do not exist below `A030`)        | Conditions do not meet the requirements for KEEWI arrival visual procedure (VMC conditions do not exist below `A030`) |
| Night | All conditions        | All conditions |

## Coordination

### CS TCU
#### Auto Release
'Next' coordination is **not** required for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

All other aircraft require a 'Next' call to CS TCU.

!!! example
    <span class="hotline">**CS ADC** -> **CS TCU**</span>: "Next, HND151"  
    <span class="hotline">**CS TCU** -> **CS ADC**</span>: "HND151, Heading 030, unrestricted"  
    <span class="hotline">**CS ADC** -> **CS TCU**</span>: "Heading 030, HND151"   

    **CS ADC**: "HND151, Assigned heading Left 030, Runway 15, Cleared for Takeoff"  
    **HND151**: "Left heading 030, Runway 15, Cleared for Takeoff, HNT151"

The Standard Assignable level from CS ADC to CS TCU is the lower of `A060` or the `RFL`.

#### ACD to CS TCU
The controller assuming responsibility of **CS ACD** shall give heads-up coordination to the relevant CS TCU controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS

!!! example
    <span class="coldline">**CS ACD** -> **CS TCU**</span>: "ABC, Requesting clearance for a Northbound VFR Coastal departure at A035"  
    <span class="coldline">**CS TCU** -> **CS ACD**</span>: "ABC, Cleared for a Northbound VFR Coastal departure, A035"  
    <span class="coldline">**CS ACD** -> **CS TCU**</span>: "Cleared for a Northbound VFR Coastal departure, A035, ABC"   
    
    **CS ACD**: "ABC, Cleared for a Northbound VFR Coastal departure, A035, Squawk 3601"  
    **ABC**: "Cleared for a Northbound VFR Coastal departure, A035, 3601, ABC"  

### CS FLW
FLW must advise ADC of any sequence changes within 36 Miles CS.  
All requests for non-duty runway arrivals must be approved by ADC.