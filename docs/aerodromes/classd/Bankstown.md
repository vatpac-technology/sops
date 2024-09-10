---
  title: Bankstown (YSBK)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Bankstown ADC  | Bankstown Tower  | 132.800         | BK_TWR                        |
| Bankstown SMC   | Bankstown Ground   | 119.900         | BK_GND                       |
| Bankstown ATIS        |                | 120.900          | YSBK_ATIS                                |

## Airspace
BK ADC is responsible for the Class D airspace in the BK CTR `SFC` to `A015`.

<figure markdown>
![BK ADC Airspace](img/BKTWR.png){ width="700" }
  <figcaption>BK ADC Airspace</figcaption>
</figure>

Refer to [Class D Tower Separation Standards](../../../separation-standards/classd) for more information.

## Fixed-Wing Operations
### VFR Inbound Procedures
VFR aircraft will report inbound at PSP or TWRN. They should be instructed to join the circuit as below:

| VFR Approach Point | RWYs 29  | RWYs 11 |
| ----------------| --------- | ---------- |
| PSP    | *"Join right downwind runway 29R, maintain A015"*, then when abeam RWYs 11 threshold or clear of departing traffic, *"Cleared visual approach"*       | *"Join final runway 11L, report 3nm"*        |
| TWRN   | *"Join crosswind runway 29R, maintain A015"*, then when abeam RWYs 11 threshold or clear of departing traffic, *"Cleared visual approach"* | *"Join final runway 11L, report at Warwick Farm"*  |

!!! note
    Aircraft joining final in the RWY 11 direction are not assigned a level and are expected to commence a visual approach in accordance with the tracking instructions issued by ADC. Aircraft are required to enter the control zone at `A010`. There is no need to clear these aircraft for a visual approach.

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
### General
These procedures apply during hours of daylight only.  During hours of darkness, all helicopters must revert to fixed-wing operations.  

The Main Pad (abeam taxiway Mike) is treated like a runway and requires a takeoff/landing clearance.  Helicopters are permitted to become airborne from a limited number of other locations on the aerodrome, such as taxiway November Two, and should be instructed to *"report airborne"* or *"report on the ground"*.

### Reporting Points
Three helicopter reporting points help keep helicopters segregated from other traffic.  

CWST: Michels Patisserie located 1.2nm west of CNTH on the water pipeline  
CNTH: Northern end of Regents Park Railway Station, roughly 300 metres north of the water pipeline  
CSTH:  Intersection of two creeks enclosing a sewage treatment works 2.1nm south of the aerodrome reference point
### Inbound Procedures
Helicopters should track inbound at `A007` via one of the normal inbound points (PSP or TWRN) or via *Olympic Park* and report to **BK ADC** at that point. In response, **BK ADC** should instruct the aircraft to track as below:

| Inbound Point | RWY 11 Config | RWY 29 Config |
| ----------------| --------- | ---------- |
| PSP | *"Report CWST"*, then <br>*"Join base main pad"* | *"Report CNTH"*, then <br>*"Join base main pad"* |
| TWRN | *"Report CSTH, A005"*, then <br>*"Overfly midfield at A005, join downwind main pad"* | *"Report CSTH, A005"*, then <br>*"Overfly midfield at A005, join downwind main pad"* |
| *Olympic Park* | *"Report CWST"*, then <br>*"Join base main pad"* | *"Report CNTH"*, then <br>*"Join base main pad"* |

!!! note
    Helicopters tracking via CSTH will pass over the runway complex midfield at `A005` to join downwind. Be mindful of aircraft in the fixed-wing circuit and pass traffic information to both aircraft prior to the fixed-wing aircraft turning final.  

    Example:  
    *"LOI, traffic is a helicopter overflying the aerodrome to the north at A005, runway left, cleared touch and go"*  
    *"YZD, traffic is a Cherokee turning final for runway left, overfly midfield at A005, join downwind main pad"*
### Outbound Procedures
Helicopters should track outbound via one of the helicopter reporting points at `A007`. Departures to the north must track via CWST when RWY 29s are in use and CNTH when RWY 11s are in use.

Helicopters shall report ready to **BK ADC** with their departure intentions. In response, **BK ADC** will clear the aircraft for takeoff and instruct them to track via the appropriate exit gate.

!!! example
    **YZD:** "Bankstown Tower, helicopter YZD, main pad, for Choppers North departure, ready"  
    **BK ADC:** "YZD, Bankstown Tower, depart Choppers North, main pad, cleared for takeoff"

!!! note
    Helicopters tracking via CSTH will pass over the runway complex midfield at `A005` to join downwind.  Be mindful of aircraft in the fixed-wing circuit and pass traffic information to both aircraft prior to the helicopter becoming airborne.  

    Example:  
    *"XEL, traffic is a helicopter overflying the aerodrome to the south at A005, runway left, cleared touch and go"*  
    *"YZD, traffic is a Cherokee turning final for runway left, depart Choppers South, main pad, cleared for takeoff"*
### Circuits
Circuits are conducted within the lateral confines of the fixed-wing circuit at `A007`, in the same direction as the current runway config.  The termination point of the circuit is the Main Pad.

!!! example
    **BK ADC:** "SUA, main pad, cleared stop and go"

## ATIS
### Runway Nomination
The ATIS must indicate the current runway config and nominate what each parallel runway is being used for.  The northern runway (11L/29R) is primarily used for VFR arrivals and departures, the southern runway (11R/29L) for circuit training, and the centre runway for IFR arrivals/departures and VFR overflow.  

This should be reflected on the ATIS as below:  
`RWY 11L FOR ARRIVALS AND DEPARTURES; RWY 11R FOR CIRCUIT TRAINING; RWY 11C IN USE`
### Operational Info
When the crosswind component exceeds 15 knots, the OPR INFO field must include:  
`CROSSWIND ALERT – DO NOT PASS THROUGH FINAL FOR YOUR ASSIGNED RUNWAY`

## Coordination

### Departures
When the aircraft is ready for departure, Tower will coordinate with the relevant Class C sector above them for permission to release the aircraft into their CTA.

!!! example
    <span class="hotline">**BK ADC** -> **SY TCU**</span>: "Next, UJN, runway 29C"  
    <span class="hotline">**SY TCU** -> **BK ADC**</span>: "UJN, unrestricted"  
    <span class="hotline">**BK ADC** -> **SY TCU**</span>: "UJN"

The Standard Assignable level from BK ADC to SY TCU is `A030`, any other level must be prior coordinated.

Aircraft shall be instructed to contact SY TCU passing `A015`.

### Arrivals/Overfliers
SY TCU will heads-up coordinate arrivals/overfliers from Class C to BK ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to BK ADC, unless BK ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**SY TCU** -> **BK ADC**</span>: "via GRB, UJN"  
    <span class="hotline">**BK ADC** -> **SY TCU**</span>: "UJN, A010"

!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. You should *generally* be able to issue a clearance for an approach and use other separation methods (visual separation, holding a departure on the ground) if separation is required with these aircraft.