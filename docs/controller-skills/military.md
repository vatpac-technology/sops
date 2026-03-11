---
title: Military/Restricted Operations
---

--8<-- "includes/abbreviations.md"

The majority of traffic on VATSIM is simulated 'civilian' traffic: airliners performing regular passenger transport, smaller general aviation aircraft doing recreational flights, and even simulated [airwork](../airwork). There is, however, a notable contingent of pilots who are interested in simulating special and military operations.

!!! important
    As per the VATSIM [Special Operations Policy](https://vatsim.net/docs/policy/special-operations){target=new}, the following activities are restricted on the VATSIM network. They may only be performed by pilots who are a member of, and flying an operation representing, an approved Virtual Special Operations Association.

    - Conducting joint training exercises with other approved VSOAs
    - War games
    - Air to air refuelling
    - Carrier operations
    - Flying low level military routes
    - Flying escort missions
    - Executing air combat manoeuvres
    - Interception/scramble of other aircraft
    - Having access to [special use airspace](#military-operating-areas)
    - [Search and Rescue Operations](#search-and-rescue-sar-operations)
    - [Firefighting Operations](#ffr-operations)
    - Launch and Recovery of Space Vehicles
    - Air Displays (Flying Displays, Races)
    - Fly unmanned aerial vehicles, e.g. Global Hawk

### Special Operations Remarks
When simulating special operations, pilotsmay file a priority status in their remarks using the STS/ format.

| STS/ Code | Description |
| --------- | ------------------------ |
|`STS/MEDEVAC` | Aircraft engaged in life critical transportation of severely ill patients | 
|`STS/FFR` | Aircraft engaged in Fire or Flood Relief operations |
|`STS/SAR` | Aircraft engaged in Search and Rescue Operations |
|`STS/HEAD STATE` | Aircraft carrying a Head of State |
|`STS/STATE` | Aircraft part of the defence force, military, or customs | 
|`STS/HOSP` | Aircraft engaged in non-life-critical transportation of medical operations, personnel, or ill patients |

!!! important
    `VATSIM Code of Conduct - Section B6`
    *No flight may declare itself to have priority over another. Pilots are permitted to declare in-flight emergencies only when under air traffic control. If, for any reason, air traffic control requests the pilot to terminate the emergency, then the pilot shall do so IMMEDIATELY or disconnect from the network. Pilots are not permitted to simulate any unlawful act including, but not limited to, declaring a hijack by any method, including entering a transponder code of 7500.*

    Persuant to the [VATSIM Code of Conduct](https://vatsim.net/docs/policy/code-of-conduct){target=new} controllers may simulate higher priority operations, such as emergency aircraft and MEDEVAC operations, by giving track shortening and conducting coordinationm as long as it does not impose an undue delay on any other aircraft (beyond reasonably expected delays, such as sequencing).

## Military Operating Areas
Military operating areas are a subset of [danger areas](../sua/#danger-areas) which are established to facilitate a range of military operations. They are labelled with the **M** prefix (e.g. M550, which makes up part of the military airspace offshore from YWLM). Inside Australian territory, approval *is* required to enter an MOA.

On VATSIM, MOAs are generally assumed to be deactivated unless being actively used for a military exercise or other purpose. ATC (when online) will generally try to reroute civil aircraft around these activities or will otherwise organise a transit clearance from the station responsible for the airspace.

## Common Military Aircraft Types
The ICAOs for many common military aircraft may be unfamiliar to controllers used to civilian operations. Below is a list of some military types that you may encounter in VATPAC airspace.

| ICAO | Aircraft                        | Type                 |
| ---- | ------------------------------- | -------------------- |
| APCH | Boeing AH-64 Apache             | Attack Helicopter    |
| C17  | Boeing C-17 Globemaster         | Military Transport (Jet)       |
| C27J | Alenia C-27J Spartan            | Military Transport (Turboprop) |
| C30J | Lockheed Martin C-130J Hercules | Military Transport (Turboprop) |
| CH47 | Boeing CH-47 Chinook            | Tandem-Rotor Helicopter        |
| F18  | Boeing EA-18G Growler           | High-Performance Jet |
| F18S | Boeing F/A-18E Super Hornet     | High-Performance Jet |
| F35  | Lockheed Martin F-35            | High-Performance Jet |
| HAWK | BAE Systems Hawk                | Jet Trainer          |
| H60  | Sikorski H-60 Blackhawk/Seahawk | Utility Helicopter   |
| P8   | Boeing P-8 Poseidon             | Military B737        |
| P21  | Pilatus PC-21                   | Turboprop Trainer    |
| TIGR | Eurocopter EC665 Tiger          | Attack Helicopter    |

## Aerodrome Operations
### Check Wheels
Military aircraft must be asked to confirm the undercarrige is down and locked when issuing a clearance to land.

!!! phraseology
    **ESA**: "VIPR42, cleared to land runway 27, check wheels"  
    **VIPR42**" "Cleared to land runway 27, three greens"

!!! note
    Some aircraft may respond with a beep tone to indicate three greens. In the real world, this tone is produced by the aircraft itself, however some online pilots may choose to replicate this produce using other methods.

### Initial and Pitch 
The Initial and Pitch is a military visual approach to the circuit area. Military aircraft approach on the deadside, parallel to the extended runway centreline at high speed (the **initial**), then make a tight turn onto downwind (the **pitch**). Aircraft should be cleared for a visual approach via the relevant initial point by the **TCU controller** and transferred to ADC when appropriate. 

To deconflict traffic, aircraft can be instructed to: 

- Pitch short (abeam the landing threshold)
- Pitch long (abeam the upwind threshold)

!!! note
    Refer to each aerodrome's SOPs for location-specific altitude and approach points.

The initial can be commenced from a straight in position (straight initial) or a position left or right of the straight in position (left and right initial).

<figure markdown>
![Initial & Pitch](img/initialandpitch.png){ width="700" }
  <figcaption>Initial & Pitch</figcaption>
</figure>

!!! phraseology
    **ESA**: "VIPR47, track via left initial runway 27, cleared visual approach, at the initial, contact Sale Tower 118.3"  
    **VIPR47**: "Track via left initial runway 27, cleared visual approach, at the initial, contact Sale Tower 118.3, VIPR47"

By default, aircraft will pitch at the midfield point (about half way down the runway). However, if necessary, instruct aircraft to move their pitch point, which has the same effect as instructing a civil aircraft to extend their downwind leg or make a close circuit.

- Pitch short (abeam the landing threshold)
- Pitch long (abeam the upwind threshold)

!!! phraseology
    **VIPR47**: "Sale Tower, VIPR47"  
    **ES ADC**: "VIPR47, pitch long"  
    **VIPR47**: "Pitch long, VIPR47"
    **VIPR47**: "VIPR47, Base"  
    **ES ADC**: "VIPR47, runway 27, cleared to land, check wheels"  
    **VIPR47**: "Runway 27, Cleared to Land, VIPR47, 3 Greens"

### Terminal/En Route Operations
#### Aircraft operating inside Restricted Area
Military aircraft are permitted to operate within their designated Restricted Area as per the relevant NOTAM. Even if this Restricted Area is inside civil airspace, Civil ATC has no control authority over it.

!!! phraseology
    **ARA**: "DRGN379, shortly entering R604 Restricted Area, identification and control services terminated, frequency change approved. Contact me prior to leaving for airways clearance"  
    **DRGN379**: "Wilco, DRGN379"  

#### ATC Activated Military Airspace
Most military TCUs and Tower positions, when online, control airspace that correspond to certain Restricted Area Activations. These are prescribed in the Local Instructions.

These Restricted Areas may be activated in vatSys, and the controllers of these positions may inform other surrounding controllers of their activations, so they may use the Resitricted Areas on the screen to visually assess the airspace and separation required for traffic.

Unless otherwise stated in Local Instructions, Restricted Areas activated for control by military TCUs and Towers, will become **Class C** airspace.


## Formation Flights
### Standard Formation
A **standard formation** is defined by more than one aircraft, separated by no more than **1nm** laterally/longitudinally, and no more than **100 feet** vertically, from the lead aircraft. All aircraft in the formation are treated as *one*. Ensure only the leader is squawking Mode C.

An additional **1nm** must be applied to any lateral separation standards for aircraft in a Standard Formation (Surveillance standards, for example, become *6nm* for Enroute, *4nm* for ADC/TCU).

!!! note
    RAAF FIHA AD2 Supps and TERMAs can be found [here](https://ais-af.airforce.gov.au/australian-aip){target=new}

When military formations make initial contact with a new sector, they will commonly "check in" with all of the members of the formation, to ensure they've all made the frequency transfer. This involves all the individual members of the formation saying their own number in order on the first call. Formations are most commonly referred to by their base radio telephony callsign, without any numbers (eg, VIPR, BLKT, WGTL).

!!! phraseology
    **VIPR**: "Viper 1, 2, 3, 4, Brisbane Centre, Viper, Maintaining F280"  
    **ARA**:  "Viper, Brisbane Centre" 

Any subsequent calls will only be made by the leader, representing the entire formation.

!!! phraseology
    **ARA**: "Viper, Climb to F340"  
    **VIPR**:  "Climb to F340, Viper" 

You may issue issue individual control instructions to a formation when necessary.

!!! phraseology
    **ARA**: "VIPR12, extend downwind"  
    **VIPR12**: "Extend downwind, VIPR12"

You must consider the formation to be broken and process aircraft individually when the formation aircraft:

- elect to carry out touch and go landings;
- are required to go around;
- elect to carry out individual activities


<!--### Close Formation
Reserved.

### Block Formation
Reserved.

### In-Trail Formation
Reserved.
-->
## MARSA Operations
**Military Authority Assumes Responsibility for Separation of Military Aircraft** (MARSA) is a procedure which authorises pilots of military aircraft to assume responsibility for separation between their aircraft and other nominated military aircraft (or military contract civil aircraft) within Australian controlled airspace. 

!!! warning "Important"
    MARSA **cannot** be initiated by ATC, it **must** be initiated by the pilot(s).

MARSA is to be assigned and terminated on pilots request, and when standard seperation can been applied.

!!! phraseology
    *MAPL01 is Maintaining F260. DRGN50 is maintaining Block F270-290 above them.*  
    **MAPL01**: "Request Climb to Block F270-F290, MARSA DRGN50"  
    **ARA**: "MAPL01, Climb to and maintain Block F270-290, MARSA DRGN50"  
    **ARA**: "DRGN50, Maintain Block F270-290, MARSA MAPL01"  
    ...  
    **MAPL01**: "Request descent to F260 and termination of MARSA"  
    **ARA**: "MAPL01, Descend to F260, MARSA DRGN50"  
    *(After MAPL01 is maintaining F260)*  
    **ARA**: "MAPL01 and DRGN50, MARSA terminated"

## NOCOM Operations
**Non-Continuous Communication** (NOCOM) procedures allow military aircraft to discontinue two-way radio communications with civil ATC. ATC approval is required when military aircraft are in controlled airspace. Military aircraft under NOCOM procedures fall under multiple categories:

- Flights on "Area Freq" when OCTA
- Flights that are "Radio Silent"
- Flights that are in SUA
- Flights that are on nominated route segments, except for short position reports when possible.

!!! note
    Military aircraft normally operate NOCOM in military Restricted Areas and Class G airspace only. **Do not** permit NOCOM operations in Civil CTA.


## Stereo Approaches
Stereo Approaches are the primary procedure for fighter & strike aircraft (e.g. F18, HAWK, PC21) recovering back to airbases after operations in SUA. Aircraft track from specified SUA exit gates where they join the procedure, tracking along charted TACAN arcs/radials which position them for an initial and pitch or instrument approach.

!!! info
    Despite their name, stereo approaches can be thought of as the military equivalent of a STAR. Aircraft generally transition from a stereo approach onto an instrument approach or an initial and pitch.

Stereo approaches should generally be used during high military traffic levels and nominated on the appropriate aerodrome ATIS.

Stereo Approach charts can be found in the [RAAF TERMA](https://ais-af.airforce.gov.au/australian-aip){target=new}

### Search and Rescue (SAR) Operations
SAR Operations are conducted more or less as a standard [airwork](/airwork) procedure. Handle the aircraft as any other normal aircraft transiting your airspace.

SAR Operations are most commonly flown in a circular area (eg Radius from a Fix, or Radius from a Lat/Long), or a Straight line pattern (eg, back and forth on a line between 2 Fixes, or 2 Lat/Longs).

!!! phraseology
    **DDU**: "DDU, request traffic for Search and Rescue operations for the next 90 minutes, within a 10nm Radius of 23 52 South, 136 01 East, Not above A060"  
    **ASP**: "DDU, No Reported IFR Traffic. Call Ops Normal time on the hour"  
    **DDU**: "Ops Normal on the hour, DDU" 

### Firefighting Operations
Reserved.