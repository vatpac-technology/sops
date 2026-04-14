---
  title: Sydney/Nancy-Bird Walton (YSWS)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                      | Callsign               | Frequency   | Login ID      |
| ------------------------- | ---------------------- | ----------- | ------------- |
| **Nancy-Bird Walton ADC** | **Walton Tower**       | **128.100** | **WS_TWR**    |
| **Nancy-Bird Walton SMC** | **Walton Ground**      | **124.050** | **WS_GND**    |
| **Nancy-Bird Walton ACD** | **Walton Delivery**    | **118.650** | **WS_DEL**    |
| **Nancy-Bird Walton ATIS** |                       | **127.000** | **YSWS_ATIS** |

## Airspace
WS ADC is not responsible for any airspace by default.

## Manoeuvring Area
### Standard Taxi Routes
Except when the traffic situation warrants, taxi clearances shall conform to the following diagram:

<figure markdown>
![YSWS Taxi Route](img/ysws_taxi_routes.png){ width="500" }
  <figcaption>YSWS Standard Taxi Routes</figcaption>
</figure>

`ERSA FAC YSWS` noise abatement procedures require all aircraft to depart from full length only. This should be simulated where practical but intersection departures should be provided to aircraft on request, where available.

<!--## Local Procedures

## VFR Operations

## Helicopter Operations
-->
## Runway Modes
### Preferred Runway Modes
Winds must always be considered for Runway modes (Crosswind <20kts, Tailwind <5kts), however the order of preference is as follows:

| Priority - Mode | Arrivals  | Departures |
| ----------------| --------- | ---------- |
| 1 - 23          | 23        | 25         |
| 1 - 05          | 05        | 05         |
| *2 - RRO        | 05        | 23         |

*Permitted between the hours of 2300 and 0530 local when [YSSY Curfew Operations](../Sydney/#preferred-runway-modes) are in use.

#### Reciprocal Runway Operations
During Reciprocal Runway Operations (RRO) aircraft will depart and arrive in opposite directions on the same runway.

The RRO procedures on YSWS are designed to utilise airspace vacated by [YSSY Curfew Operations](../Sydney/#preferred-runway-modes). Outside of YSSY curfew hours, or when YSSY is using a non-curfew runway mode, the RRO runway mode **should not** be used.

## SID Selection
!!! tip
    A radar SID (e.g. **WS (RADAR)** SID) is distinct from a procedural SID with a RADAR transition (eg, **REDAS SID, RADAR transition**), or a Procedural SID that ends in RADAR vectors (eg, **ISDIT** SID). A radar SID can be identified in the [DAPs](https://www.airservicesaustralia.com/aip/aip.asp){target=new} as having a *"(RADAR)"* at the end of the name.
	
YSWS uses four different SID designators to differentiate between different variations of SIDs that will be issued, according to time of day, weather, and runway modes in use.

|      | SID Designator | Condition                     |
| ---- | -------------- | ----------------------------- |
| D    | Day            | Between 0530-2300 Local       |
| H    | Hot/Heavy      | Temperature ≥ 35° C, or<br>Heavy aircraft unable to meet level restrictions (on request) |
| N    | Night          | Between 2300-0530 Local, when RRO is **not** in use |
| Q    | RRO            | Between 2300-0530 Local, when RRO is **in use**  |

=== "05"
	=== "Day"
		| Type    | Via      | SID           |
		| ------- | ------   | ------------- |
		| Jet     | BENBU    | **BENBU** SID |
		| Jet     | CAWLY<br>DIPSO<br>EVONN<br>NOBAR<br>OLSEM<br>OPTIC | **TESAT** SID, Relevant Transition |
		| Jet     | PKS VOR  | **PKS** SID   |
		| Jet     | TEEVE    | **TEEVE** SID |
		| Jet     | LEECE<br>NWA NDB | **TONTO** SID, Relevant Transition | 
		| Jet     | All others | RADAR SID |
		| Non-Jet | DIPSO<br>KAMBA<br>NOBAR | **KAMBA** SID, Relevant Transition |
		| Non-Jet | North and East | **ISDIT** SID |
		| Non-Jet | South and West | **ADPAV** SID |
		
	=== "Hot/Heavy"
		| Type    | Via      | SID           |
		| ------- | ------   | ------------- |
		| Jet     | LEECE<br>NWA NDB | **TONTO** SID, Relevant Transition |
		

	=== "Night"
		| Type    | Via      | SID           |
		| ------- | ------   | ------------- |
		| Jet     | BENBU    | **BENBU** SID |
		| Jet     | CAWLY<br>EVONN<br>OPTIC | **ENDEV** SID, Relevant Transition |
		| Jet     | DIPSO<br>EVONN<br>NOBAR<br>OPTIC | **PASGO** SID, Relevant Transition |
		| Jet     | EXETA<br>LEECE<br>NWA NDB | **REDAS** SID, Relevant Transition |
		| Jet     | TEEVE    | **TEEVE** SID |
		| Jet     | PKS VOR  | **TEEVE** SID, Relevant Transition |
		| Jet     | All others | RADAR SID |
		| Non-Jet | KAMBA    | **KAMBA** SID |
		| Non-Jet | All others | As per Jets |

=== "23"
	=== "Day"
		| Type    | Via      | SID           |
		| ------- | ------   | ------------- |
		| Jet     | BENBU    | **BENBU** SID |
		| Jet     | CAWLY<br>DIPSO<br>EVONN<br>NOBAR<br>OLSEM<br>OPTIC | **TESAT** SID, Relevant Transition |
		| Jet     | PKS VOR  | **PKS** SID   |
		| Jet     | TEEVE    | **TEEVE** SID |
		| Jet     | LEECE<br>NWA NDB | **TONTO** SID, Relevant Transition | 
		| Jet     | All others | RADAR SID |
		| Non-Jet | EXETA<br>NWA NDB<br>WOL NDB | **REGER** SID, Relevant Transition |
		| Non-Jet | North and East | **LEKID** SID |
		
		
	=== "Hot/Heavy"
		| Type    | Via      | SID           |
		| ------- | ------   | ------------- |
		| Jet     | LEECE<br>NWA NDB | **MELIT** SID, Relevant Transition |


	=== "Night"
		| Type    | Via      | SID           |
		| ------- | ------   | ------------- |
		| Jet     | BENBU    | **BENBU** SID |
		| Jet     | CAWLY<br>EVONN<br>OPTIC | **ENDEV** SID, Relevant Transition |
		| Jet     | DIPSO<br>NOBAR<br>OPTIC | **PASGO** SID, Relevant Transition |
		| Jet     | EXETA<br>LEECE<br>NWA NDB | **REDAS** SID, Relevant Transition |
		| Jet     | TEEVE    | **TEEVE** SID |
		| Jet     | PKS VOR  | **TEEVE** SID, Relevant Transition |
		| Jet     | All others | **REDAS SID**, RADAR Transition |
		| Non-Jet | KAMBA    | **KAMBA** SID, Relevant Transition |
		| Non-Jet | All others | As per Jets |
		
	=== "RRO"
		| Type    | Via      | SID           |
		| ------- | ------   | ------------- |
		| Jet     | BENBU    | **BENBU** SID |
		| Jet     | CAWLY<br>DISPO<br>EVONN<br>NOBAR<br>OLSEM<br>OPTIC | **ENDEV** SID, Relevant Transition |
		| Jet     | EXETA<br>LEECE<br>NWA NDB | **TONTO** SID, Relevant Transition |
		| Jet     | TEEVE    | **TEEVE** SID |
		| Jet     | PKS VOR  | **TEEVE** SID, Relevant Transition |
		| Non-Jet | KAMBA    | **KAMBA** SID |
		| Non-Jet | All others | As per Jets |


## ATIS
### Operational Info
#### ACD Pushback Requests
When implementing the Pushback Requests on ACD procedure, the OPR INFO shall include:
`ALL DEPARTURES MUST REQUEST PUSH BACK ON 118.65`

## Coordination
### Auto Release
!!! warning "Important"
    YSWS utilises auto release for all **Procedural** SIDs, and the **WS (RADAR)** SID provided aircraft are assigned the standard assignable level and a [Standard Assignable Heading](#standard-assignable-departure-headings).

[Next](../../../controller-skills/coordination/#next) coordination is **not** required for aircraft that are:   

- Departing from a runway nominated on the ATIS; and   
- Assigned the standard assignable level; and  
- Assigned a **Procedural** SID or the **Radar** SID with a [Standard Assignable Heading](#standard-assignable-departure-headings).

All other aircraft require a 'Next' call to WS TCU.

'Next' coordination is additionally required for:  
 
- [After a go around](../../../controller-skills/coordination/#after-a-go-around), the next departure from that runway  
- All aircraft during the [RRO](#reciprocal-runway-operations) runway mode.

The Standard Assignable level from WS ADC to WS TCU is: 

| Aircraft | Level  |
| -------- | ------ |
| Jets     | `A000` |
| Non-Jets | The lower of `A000` and `RFL` |

### Departures Controller
When a TCU controller is online, aircraft shall be issued with a departure frequency during their airways clearance in accordance with the table below. If no TCU controllers are online, the most appropriate Enroute controller or Advisory frequency shall be issued.


### Standard Assignable Departure Headings
Aircraft that have been cleared the **WS (RADAR)** SID must receive an assigned heading with their line up or takeoff clearance. 'Next' coordination is not required to the WS TCU controller when the departing aircraft has been assigned the standard assignable level and assigned one of the headings listed below:

| Runway     | All Aircraft |
| ---------- | ------------ |
| RWY 05     | HXXX         |
| RWY 23     | HXXX         |

#### ACD to SY TCU
The controller assuming responsibility of **WS ACD** shall give [heads-up](../../../controller-skills/coordination/#airways-clearance) coordination to WS TCU prior to the issue of the following clearances: 

- VFR departures
- Aircraft using a runway not on the ATIS
