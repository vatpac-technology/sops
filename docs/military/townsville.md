---
  title: Townsville TCU
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login Identifier              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| Townsville Approach    | Townsville Approach   | 126.800         | TL_APP                                   |
| Townsville ADC    | Townsville Tower  | 118.300         | TL_TWR        |
| Townsville SMC    | Townsville Ground  | 121.800         | TL_GND        |
| Townsville ACD    | Townsville Delivery  | 128.100         | TL_DEL       |
| Townsville ATIS    |   | 133.500         | YBTL_ATIS       |

## Airspace
### TCU
TL TCU owns the airspace within a 36NM radius of the TL DME from `SFC`–`FL180`

### ADC
ADC owns the airspace within the TL CTR (`SFC`–`A015`). This airspace is designed to facilitate the processing of VFR arrivals, circuit operations and low-level transits to training areas.  
The CTR extends 7NM from the thresholds of runways 01 and 19.

### Surveillance
TL ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the TL ADC airspace.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm of the aerodrome. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

## Aerodrome
### Taxiway Restrictions
Taxiways E1 and F are not available to aircraft above 40,000 kilograms. Taxiway C is not available to aircraft above 5,700 kilograms.  
Traffic permitting, wide-bodied aircraft shall be entered/exited for RWY 01/19 from taxiways A1 or D2 and backtracked as required.

### Runway Operations
Runways 01 and 19 are the main duty runways at Townsville.  
Runways 07 and 25 are primarily used by helicopters, however, they may also be used to facilitate single engined fixed wing operations and for emergencies.

### Departures
IFR flights shall be cleared via:  
a) BE20/B350 and fixed wing aircraft with a wake turbulence category of medium or greater planned via **WALTA**, **JEMMA**, **ANRUB**, **CATEY**, **CARMN**, **PEWEE**, or **SWIFT**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint;  
b) When cloud base and visibility exceeds `A020` and 5 KM, visual departure;  
c) otherwise; TL North OR East (RADAR) SID

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Coordination
### Enroute
#### Departures
Voiceless coordination is in place from TL TCU to KEN(TBP) for aircraft:  
Planned at or above `F180`: `Assigned F180`  
Planned below `F180`: `Assigned the RFL`

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**TL TCU** -> **TBP**</span>: "SKP523, with your concurrence, will be assigned F160, for my separation with FD401"  
    <span class="hotline">**TBP** -> **TL TCU**</span>: "SKP523, concur F160"

#### Arrivals
The Standard assignable level from KEN(TBP) to TL TCU is `A100`, and assigned a STAR. All other aircraft must be prior coordinated.

### TL ADC
#### Auto Release
'Next' coordination is **not** required to TL TCU for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

All other aircraft require a 'Next' call to TL TCU.

!!! example
    <span class="hotline">**TL ADC** -> **TL TCU**</span>: "Next, RXA5424, Runway 19"  
    <span class="hotline">**TL TCU** -> **TL ADC**</span>: "RXA5424, Track Extended Centreline, Unrestricted"  
    <span class="hotline">**TL ADC** -> **TL TCU**</span>: "Track Extended Centreline, RXA5424"  
    
    **TL ADC**: "RXA5424, Track Extended Centreline 197 degrees, Runway 19, Cleared for Takeoff"  
    **RXA5424**: "Track Extended Centreline 197 degrees, Runway 19, Cleared for Takeoff, RXA5424"

The TL TCU controller can suspend/resume Auto Release at any time, with the concurrence of **TL ADC**.

The Standard Assignable level from TL ADC to TL TCU is the lower of `A060` or the `RFL`.

## Miscellaneous
### Circuit Operations
VFR aircraft that will operate only in ADCs airspace shall be assigned SSR code 0100.

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 01     | Left  |
| 07     | Left |
| 19     | Right |
| 25     | Right |

### IFR Training Area
IFR aircraft requiring an area for training shall be cleared to operate in the North Eastern Training Area (NETA)  
The NETA is defined as the area between TL 025R–080R from 10NM–30NM DN DME.  
Aircraft are to be cleared to the NETA via:  
a) `KAGES` when runway 01 is in use or;  
b) `REGIN` when runway 19 is in use   
Vertical limits are to be specified by TLA prior to issuing airways clearance.

### Designated Fuel Dumping Area
Other than in an emergency, the designated fuel jettison area is:  
a) Over water north of Magnetic Island;  
b) `A060` or above