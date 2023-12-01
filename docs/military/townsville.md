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
TL TCU owns the Class C and G airspace within 36 DME TL from `SFC` - `FL180`

<figure markdown>
![TL TCU/ADC Airspace Structure](img/tltcu.png){ width="2000" }
  <figcaption>TL ADC/TCU Airspace Structure</figcaption>
</figure>

### ADC
TL ADC owns the Class C arispace in the TL CTR (Extends to 7NM of the thresholds of 01 and 19.) from `SFC` - `A015`. This airsapce is designed to facilitate Helicopter Traffic and Ciruit Traffic.

### Surveillance
TL ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the TL ADC arispace. 
For simulations purposes,  visual separation is assumed to exist belwo the cloud base, and whtin 7NM of the areodrome. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

## Aerodrome
### Runway Operations
Runways 01 and 19 are the primary runways at Townsville. 
Runway 07 is often used in conjunction with 01 for VFR arrivals and Helicopter Traffic. 

### NON-RNAV Departures
For non-RNAV approved IFR aircaft with a wake turbulence category of medium or greater, issue a RADAR SID.
For non-RNAV approved IFR aircraft with a wake turbulence category of light, issue a visual departure or Radar SID

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
    <span class="hotline">**TL TCU** -> **TBP**</span>: "JST729, with your concurrence, will be assigned F160, for my separation with QLK327D"  
    <span class="hotline">**TBP** -> **TL TCU**</span>: "JST729, concur F160"  

#### Arrivals
The Standard assignable level from KEN(TBP) to TL TCU is `A100`, and assigned a STAR. All other aircraftm us be prior coordinated.

### TL ADC
#### Auto Release
"Next" coordination is **not** required to TL TCU for aircraft that are:  
a) Departing from a runway nominated on the ATIS; and  
b) Assigned the standard assignable level; and  
c) Assigned a Procedural SID  

All other aircraft require a "Next" call to TL TCU.

!!! example
    <span class="hotline">**DN ADC** -> **DN TCU**</span>: "Next, DNGO05, runway 19"  
    <span class="hotline">**DN TCU** -> **DN ADC**</span>: "DNGO05, Assigned Heading Left 150, unrestricted"  
    <span class="hotline">**DN ADC** -> **DN TCU**</span>: "Assigned Heading Left 150, unrestricted, DNGO05"  

### Miscellaneous
### Circuit Operations
VFR aircraft operating inside TL ADCs airspace shall be assinged A010.

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 01     | Left  |
| 07     | Left |
| 19     | Right |
| 25     | Right |

### Helicopter Procedures
Procedures relating to Helicopters can be found in the Airforce AIP AD2 SUPPS Section for Townsville. (7.5 - 7.9)