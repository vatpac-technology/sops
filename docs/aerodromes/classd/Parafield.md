---
  title: Parafield (YPPF)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name                   | Callsign              | Frequency   | Login ID      |
| ---------------------- | --------------------- | ----------- | ------------- |
| **Parafield ADC East** | **Parafield Tower**   | **118.700** | **PF_TWR**    |
| <span class="indented">Parafield ADC West :material-information-outline:{ title="Non-standard position"} | Parafield Tower | 124.600 | PF-W_TWR |
| **Parafield SMC**      | **Parafield Ground**  | **119.900** | **PF_GND**    |
| **Parafield ATIS**     |                       | **120.900** | **YPPF_ATIS** |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
PF ADC is responsible for the Class D airspace in the PF CTR `SFC` to `A015`.

<figure markdown>
![PF ADC Airspace](img/PFTWR.png){ width="700" }
  <figcaption>PF ADC Airspace</figcaption>
</figure>

### Dual ADC Operations
When Parafield ADC West is online, responsibility for the **Runway**, **Circuit**, and **Airspace** is divided between the two ADC controllers.

Airspace Ownership when ADC West is online, is split down the middle of the two active extended centrelines.

ADC East takes responsibility for the South/East Runway, Circuit and Airspace (Runway **08R/26L** and **03R/21L**).

ADC West takes responsibility for the North/West Runway, Circuit and Airspace (Runway **08L/26R** and **03L/21R**).

ADC West is **not permitted** online when *Single Runway* Operations are in use.

Refer to the [ATIS section](#runway-mode-formatting) for information on ATIS formatting when ADC West is online.

## VFR Operations
### Arrivals
| VFR Approach Point | RWYs 03 | RWYs 21 | RWYs 08 | RWYs 26 |
| ----------------| --------- | ---------- | ----- | ----- |
| OHB   | Join base (or downwind) RWY 03L | Join base (or downwind) RWY 21R | Join final RWY 08L| Join downwind RWY 26R | 
| DMW | Join downwind RWY 03R | Join 3NM final RWY 21L| Join downwind RWY 08L | Join final RWY 26R |

!!! warning "Important"
    Visually monitor all aircraft to ensure tracking South of **Bolivar Strobe** (located at the Southern tip of the EDN CTR), to ensure aircraft remain outside of EDN CTR. 
    <figure markdown>
    ![Bolivar](img/bolivar.png){ width="400" }
    </figure>

## Runway Modes
### Preferred Runway Modes
Winds must always be considered for Runway modes (Crosswind <20kts, Tailwind <5kts), however the order of preference is as follows:

| Priority - Mode | Arrivals  | Departures |
| ----------------| --------- | ---------- |
| =1     | 03L & 03R |
| =1     | 21L & 21R |
| =2     | 08L & 08R |
| =2     | 26L & 26R |
| 3     | Any Single Runway Operations |

| Priority - Mode | Arrivals  | Departures |
| ----------------| --------- | ---------- |
| =1 - 03 PROPS | 03L (WEST) & 03R (EAST) | 03L (WEST) & 03R (EAST) |
| =1 - 21 PROPS | 21L (EAST) & 21R (WEST) | 21L (EAST) & 21R (WEST) |
| =2 - 08 PROPS | 08L (WEST) & 08R (EAST) | 08L (WEST) & 08R (EAST) |
| =2 - 26 PROPS | 26L (EAST) & 26R (WEST) | 26L (EAST) & 26R (WEST) |

#### Night Operational Restrictions
Runways 03R/21L, 08L/26R, and 08R/26L are unlit, and **cannot** be used at night.

### Circuits
Circuits to be flown at `A010`

| Runway | Day  | Night |
| -------| -----| ------|
| 03L  | Left   | Left  |
| 03R  | Right  | -     |
| 21L  | Left   | -     | 
| 21R  | Right  | Right |
| 08L  | Left   | -     |
| 08R  | Right  | -     |
| 26L  | Left   | -     |
| 26R  | Right  | -     |

## SID Selection
When Runway **03L/21R** is in use, IFR aircraft shall be assigned the RADAR SID. When departing any other runway, IFR aircraft shall be assigned a visual departure.

## ATIS
### Runway Mode Formatting
The ATIS must indicate runway configuration in the format below:

| Mode        | Controllers | ATIS Runway information |
| ----------- | ----------- | ----------------------- |
| PROPS | Single ADC  | `RWY 03R/08R/21L/26L FOR ARRS AND DEPS EAST. RWY 03L/08L/21R/26R FOR ARRS AND DEPS WEST` |
| PROPS | Dual ADC    | `RWY 03R/08R/21L/26L FOR ARRS AND DEPS EAST, FREQ 118.7. RWY 03L/08L/21R/26R FOR ARRS AND DEPS WEST, FREQ 124.6` |
| Single Runway | Single ADC | `ALL OPERATIONS RWY (Number)` |

### Approach Expectation
When **Runway 21R** is in use for arrivals, the following table shall be followed for the Approach Expectation field:

| Cloud Base                | Visibility | ATIS APCH field |
| ------------------------- | ---------- | --------------- |
| Above `A020`              | >5000M     | (blank)         |
| At or below `A020` **or** | <5000M     | `EXP INST APCH` |

## Coordination
### Departures
[Next](../../controller-skills/coordination.md#next) coordination is required from PF ADC to AD TCU for all aircraft **entering AD TCU CTA**.

The Standard Assignable level from **PF ADC** to **AD TCU** is:

| Aircraft | Level |
| ----- | ---- |
| All | The lower of `A030` and `RFL` |

### Arrivals
AD TCU will heads-up coordinate arrivals/overfliers from Class C to PF ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to PF ADC, unless PF ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! phraseology
    <span class="hotline">**AAW** -> **PF ADC**</span>: "via PAL, YTS"  
    <span class="hotline">**PF ADC** -> **AAW**</span>: "YTS, A010"

!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. You should *generally* be able to issue a clearance for an approach and use other separation methods (visual separation, holding a departure on the ground) if separation is required with these aircraft.

## Taxi Routes
Taxiway Bravo crosses through the Undershoots of Runway 26L and 26R. As per YPPF Aerodrome Chart, a `Clearance is Required` to taxi through these areas, using the same phraseology as normal Runway Crossings.

!!! phraseology 
    **PF SMC:** "USP, On Bravo cross the undershoots of Runway 26L and 26R. Taxi to Holding Point B1, Runway 03L."
    **USP:** "On Bravo cross undershoots of Runway 26L & 26R. Taxi to Holding Point B1 Runway 03L, USP."

#### ADC West Online
When ADC West is online, AD TCU may not be familiar with which controller owns what airspace. Best practice is to receive the coordination no matter what, and if it was meant for the other ADC controller, relay the coordination to them internally.

### PF ADC Internal
PF ADC must heads-up coordinate **all aircraft** transiting from one ADC controller to the other.

!!! phraseology
    <span class="hotline">**PF ADC W** -> **PF ADC E**</span>: "via OHB, YNM for an overhead join"  
    <span class="hotline">**PF ADC E** -> **PF ADC W**</span>: "YNM, A015"