---
  title: Archerfield (YBAF)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login ID                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Archerfield ADC**  | **Archer Tower**  | **118.100**        | **AF_TWR**                        |
| Archerfield ADC 2†  | Archer Tower  | 123.600        | AF-2_TWR                        |
| **Archerfield SMC**   | **Archer Ground**  | **129.300**         | **AF_GND**                       |
| Archerfield ATIS        |                | 120.900          | YBAF_ATIS                                |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

### Dual ADC Operations
When Archerfield ADC 2 is online, responsibility for the **Runway**, **Circuit**, and **Airspace** is divided between the two ADC controllers.

ADC 1 takes responsibility for the South/East Runway, Circuit and Airspace (Runway **10R, 28L, 04R, 22L**).

ADC 2 takes responsibility for the North/West Runway, Circuit and Airspace (Runway **10L, 28R, 04L, 22R**).

ADC 2 is **not permitted** online when *Single Runway* Operations are in use.

Refer to the [ATIS section](#dual-adc-operations_2) for information on ATIS formatting when ADC 2 is online.

## Airspace
AF ADC is responsible for the Class D airspace in the AF CTR `SFC` to `A015`.

<figure markdown>
![AF ADC Airspace](img/YBAF_Vatsys.PNG){ width="700" }
  <figcaption>AF ADC Airspace</figcaption>
</figure>

Refer to [Class D Tower Separation Standards](../../../separation-standards/classd) for more information.

### Dual ADC Operations
Airspace Ownership when ADC 2 is online, is split down the middle of the two active extended centrelines.

## VFR Procedures
### Arrivals
VFR aircraft should track via a VFR inbound point at `A015` and be instructed as below:

| VFR Approach Point | RWYs 04  | RWYs 22 | RWYs 10  | RWYs 28 | 
| ----------------   | --------- | ------------- | --------- | ---------- |
| TVT    |  *"Join Base RWY 04L, report CBRG"* | *"Join Base RWY 22R, report CBRG"* | *"Join Final RWY 10L, report CBRG"* | *"Join Downwind RWY 28R, maintain A015, report CBRG"* |
| GON    |  *"Join Final RWY 04L"*                             | *"Join Downwind RWY 22R, maintain A015"*                          | *"Join Final RWY 10R"* | *"Join Downwind RWY 28L, maintain A015"*        |
| PKR   |  *"Join Base RWY 04R, report Logan Motorway"*     | *"Join Base RWY 22L, report Logan Motorway"*     | *"Join Base RWY 10R, report Logan Motorway"*  | *"Join Base 28L, report Logan Motorway"*         |
| TAR       |  *"Join Base RWY 04R"*                              | *"Join Base RWY 22L"*                              | *"Join Downwind RWY 10R, maintain A015"*       | *"Join Final RWY 28L"*        |

!!! note
    Aircraft joining downwind are instructed to maintain `A015` for separation with aircraft departing the zone at `A010`.  Once inbound aircraft are clear of the departure track, they should be *"cleared visual approach"*.

### Departures

| Planned Departure Tracks | "Intentions"   | Tracking Requirement | 
| ---------------      | ---------      | ----------           | 
| BTN 310 & 019 DEG    | Northern Departure | Track via WTBG | 
| BTN 020 & 099 DEG    | Eastern Departure  | Track via Gateway Motorway and Pacific Motorway Intersection   *(Not available when Rwy 22 active EXC if departing into Class C)* | 
| BTN 100 & 204 DEG    | Southern Departure | Track 135 DEG from Archerfield |
| BTN 205 & 309 DEG    | Western Departure  | DEP AF CTR on a track between 220 & 309. Acft must nominate outbound DEP track with TAXI call |
| Other                |                    | As approved by ATC

VFR departures will depart the control zone at `A010`.

Aircraft should advise planned Departure Procedure to **AF SMC** with TAXI call and **AF ADC** with READY call.

!!! phraseology
    **VPF:** "Archer Ground, Cherokee VPF is on the Main Apron, solo, Western Departure, received information Alpha, request taxi"

    **VPF:** "Archer Tower, Cherokee VPF is B8, runway 10 Left for Western Departure, ready"

## Circuits
The circuit direction changes depending on time of day and runway being used.

| Runway | Day  | Night |
| ----------------| --------- | ---------- |
| 04R             | Right | -  |
| 04L             | Left  | -  |
| 22R             | Right | -  |
| 22L             | Left  | -  |
| 10R             | Right | -  |
| 10L             | Left  | Left  |
| 28R             | Right | Right |
| 28L             | Left  | -  |

Circuits are to be flown at `A010`.

## ATIS
### Runway Nomination
The ATIS must indicate the current runway config and nominate what each runway is being used for. This should be reflected on the ATIS as below:

| Runway | RWY Field  |
| ----------------| --------- |
| Single RWY      | `ALL OPERATIONS RWY (Number)` |
| RWY 10/28       | `RWY 10L/28R FOR ARRS AND DEPS NORTH. RWY 10R/28L FOR ARRS AND DEPS SOUTH` |
| RWY 04          | `RWY 04L FOR ARRS AND DEPS NORTH AND WEST. RWY 04R FOR ARRS AND DEPS SOUTH AND EAST` |
| RWY 22          | `RWY 22. EASTERN DEPS NAVBL. RWY 22R FOR ARRS AND DEPS NORTH AND WEST. RWY 22L FOR ARRS SOUTH AND EAST AND DEPS SOUTH` |

#### Dual ADC Operations

| Runway | RWY Field  |
| ----------------| --------- |
| RWY 10/28       | `RWY 10L/28R FOR ARRS AND DEPS NORTH, FREQ 123.6. RWY 10R/28L FOR ARRS AND DEPS SOUTH, FREQ 118.1` |
| RWY 04          | `RWY 04L FOR ARRS AND DEPS NORTH AND WEST, FREQ 123.6. RWY 04R FOR ARRS AND DEPS SOUTH AND EAST, FREQ 118.1` |
| RWY 22          | `EASTERN DEPS NAVBL. RWY 22R FOR ARRS AND DEPS NORTH AND WEST, FREQ 123.6. RWY 22L FOR ARRS SOUTH AND EAST AND DEPS SOUTH, FREQ 118.1` |

### Approach Expectation
The APCH field should include `EXP INST APCH` when:   
  - the ceiling is at or below `A029`; or  
  - visibility is less than 5000m  

## Coordination
### Departures
When aircraft planned via a CTA departure are ready for takeoff and expected to depart imminently, **AF ADC** shall seek release of the aircraft through a 'Next' call.

!!! phraseology
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "Next, XMM, Runway 10L"  
    <span class="hotline">**BN TCU** -> **AF ADC**</span>: "XMM, Unrestricted"  
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "XMM"

The Standard Assignable level from AF ADC to BN TCU is the lower of `A040` or the `RFL`, any other level must be prior coordinated.

### Arrivals/Overfliers
BN TCU will heads-up coordinate arrivals/overfliers from Class C to AF ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to AF ADC, unless AF ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! phraseology
    <span class="hotline">**BN TCU** -> **AF ADC**</span>: "via TVT for the visual approach, UJE"  
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "UJE, visual approach"

!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. You should *generally* be able to issue a clearance for an approach and use other separation methods (visual separation, holding a departure on the ground) if separation is required with these aircraft.

#### ADC 2 Online
When ADC 2 is online, BN TCU may not be familiar with which controller owns what airspace. Best practice is to receive the coordination no matter what, and if it was meant for the other ADC controller, relay the coordination to them internally.

### AF ADC Internal
AF ADC must heads-up coordinate **all aircraft** transiting from one ADC controller to the other.

!!! phraseology
    <span class="hotline">**AF ADC** -> **AF ADC 2**</span>: "via TAR, TQC for an overhead join"  
    <span class="hotline">**AF ADC 2** -> **AF ADC**</span>: "TQC, A015"