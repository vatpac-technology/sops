---
  title: 6. Brisbane (YBBN)
---

--8<-- "includes/abbreviations.md"

## Runway Modes
### 01 PROPS
#### Airspace Division
Non-Standard airspace division will be in use.

The **red** line represents the STARs to the arrival runways.  
The **solid green** line represents the SID to **SANEG**.  
The **dashed green** line represents the *suggested vectors* for **01L** Departures.

<figure markdown>
![01 PROPS Airspace Division](../img/01PROPS.png){ width="700" }
  <figcaption>01 PROPS Airspace Division</figcaption>
</figure>

01L will be the primary runway for arrivals.  
01R will be the primary runway for departures.

#### 01L Departures
Departures from Runway 01L will be assigned the **BN4** SID with an assigned heading of **H340**.  
Aircraft must then be vectored to the east, then assigned a heading of **H180** when clear of 01R Departures.  
Aircraft may be handed off to GOL on this heading.

### 19 PROPS
#### Airspace Division
Non-Standard airspace division will be in use.

The **red** line represents the STARs to the arrival runways.  
The **dashed green** lines represents the *suggested vectors* for Departures.

<figure markdown>
![19 PROPS Airspace Division](../img/19PROPS.png){ width="700" }
  <figcaption>19 PROPS Airspace Division</figcaption>
</figure>

19L will be the primary runway for arrivals.  
19R will be the primary runway for departures.

#### 19L Departures
Departures from Runway 19L will be assigned the **BN4** SID with an assigned heading of **H160**.  
Aircraft may be handed off to GOL on this heading.

#### 19R Departures
Departures from Runway 19R will be assigned the **BN4** SID with an assigned heading of **H210**.  
Aircraft may be cleared DCT **SANEG** when clear of 19L Departures.

### Approach Expectation
All arrivals will be cleared for the Approach type indicated on the ATIS.

#### Independent Visual Approaches
Although not used at YBBN normally, IVAs can be expected to be in use for WorldFlight, to facilitate the high volume of traffic for both runways.

Aircraft must report both **visual**, *and* **runway in sight** in order to be cleared for an IVA.

!!! tip
    The [Label Data Annotations](../../../client/annotations/#miscellaneous) for these are `V` and `R`, respectively

Ensure you familiarise yourself with the applicable [Separation Standards](../../../separation-standards/parallelapps/#independent-visual-approaches)

Pass *Traffic Information* on aircraft that will come within **1.5nm** of each other on parallel approaches.

!!! example
    **BAN:** "UAL8317, Traffic is an A320 at your 2 o'clock for the parallel runway"

#### 19R Arrivals
Runway 19R Arrivals will be assigned the **Xray** STAR. The preferred approach type will be the **Independent Visual Approach**, however if weather does not permit this:

- Aircraft that can accept the **RNP X** Approach will be cleared for it; or
- Aircraft that **cannot** accept the RNP X Approach, will be cleared **LUVNA** DCT **SABKO** for the **ILS** Approach.

## Sector Distribution
In order to balance workload effectively, it is recommended to distribute responsibility for the Brisbane TCU sectors accordingly:

### Two Controllers Online

- BAS and BAN combined
- BDS and BDN combined
- No BFL

### Three Controllers Online

- BAS and BAN combined
- BDS and BDN combined
- BFL on its own

### Four Controllers Online

- BAS on its own
- BAN on its own
- BDS and BDN combined
- BFL on its own

## Flow
BFL will formulate the sequence in accordance with the [BN TCU Flow Table](../../../terminal/brisbane/#flow). Ensure that event traffic gets priority over non-event traffic.

BFL will construct the sequence via the [Arrivals List Window](../../../controller-skills/sequencing/#arrivals-list).

Appropriate annotations for the Arrivals List Window can be found [here](../../../client/annotations/#sequencingflow).

### Times
The times below indicate the number of minutes from the Feeder Fix to the Runway Threshold on the appropriate STAR.

| FF | Runway | Time |
| ---------- | --- | --- |
| SMOKA      | 01L | 16 |
| SMOKA      | 19L | 14 |
| ENLIP    | 01R | 11 |
| ENLIP    | 19R | 16 |

Subtract **1 minute** if assigned MX or CSR.

### Speeds
BUR will instruct all arrivals to cross **SMOKA** and **ENLIP** at **250 knots**, then *published STAR speeds*.

## Coordination
### BN ADC
#### Auto Release
Avilable for aircraft assigned:

| Runway | SID | Assigned Heading |
| ---------- | --- | --- |
| 01L  | BN4 | H340 |
| 01R  | SANEG1 | - |
| 19L  | BN4 | H160 |
| 19R  | BN4 | H210 |

### BDN/BDS to GOL
Voiceless for all aircraft:

- Assigned the lower of `F180` or the `RFL`; and  
- Tracking via **SANEG**; or  
- East of **SANEG**, Assigned a Heading between **H180**-**H160**.

All other aircraft going to GOL CTA will be **Heads-up** Coordinated.

### BUR to BAN/BAS
Voiceless for all aircraft:

- With ADES **YBBN**; and  
- Assigned `A090`; and
- Assigned any of the following:

| STAR | Runway | DCT Tracking available |
| ---------- | --- | --- |
| SMOKA1A      | 01L | None |
| SMOKA1A      | 19L | None |
| ENLIP2A      | 01R | DCT **MULNI** |
| ENLIP2X      | 19R | DCT **DRAIN** |

All other aircraft coming from BUR/DOS CTA will be **Heads-up** Coordinated to BN TCU prior to **20nm** from the boundary.

#### Between BUR/KPL and BFL
BFL must **voice coordinate** any changes to instructions after BUR/KPL has put a `<` on it.

BFL must **voice coordinate** to KPL/BUR any aircraft that must be rerouted via **ENLIP** for **01R/19R**.

!!! example
    <span class="hotline">**BFL** -> **KPL**</span>: "PAA001 via ENLIP for 01R please"  
    <span class="hotline">**KPL** -> **BFL**</span>: "PAA001 via ENLIP for 01R, will be"  

BUR/KPL must **voice coordinate** any requests for *Track Shortening*, *CSR*, or *Different STARs*, to BFL.