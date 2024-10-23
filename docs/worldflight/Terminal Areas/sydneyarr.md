---
  title: 7. Sydney (YSSY) Arrivals
---

--8<-- "includes/abbreviations.md"

## Runway Modes
### 16 PROPS
#### Airspace Division
Non-Standard airspace division will be in use.

The **red** line represents the STARs to the arrival runways.  

<figure markdown>
![16 PROPS Airspace Division](../img/16PROPS Arrivals.png){ width="700" }
  <figcaption>16 PROPS Airspace Division</figcaption>
</figure>

### 34 PROPS
#### Airspace Division
Non-Standard airspace division will be in use.

The **red** line represents the STARs to the arrival runways.  

<figure markdown>
![34 PROPS Airspace Division](../img/34PROPS Arrivals.png){ width="700" }
  <figcaption>34 PROPS Airspace Division</figcaption>
</figure>

#### 34R Arrivals
Ensure that 34R Arrivals are assigned **H150** at or prior to **LANOL**, to ensure separation with 34L Arrivals.

### Approach Expectation
All arrivals will be cleared for the Approach type indicated on the ATIS.

#### Independent Visual Approaches
IVAs can be expected to be in use for WorldFlight, to facilitate the high volume of traffic for both runways.

Aircraft must report both **visual**, *and* **runway in sight** in order to be cleared for an IVA.

!!! tip
    The [Label Data Annotations](../../../client/annotations/#miscellaneous) for these are `V` and `R`, respectively

Ensure you familiarise yourself with the applicable [Separation Standards](../../../separation-standards/parallelapps/#independent-visual-approaches)

Pass *Traffic Information* on aircraft that will come within **1nm** of each other on parallel approaches.

!!! example
    **SFW:** "NPT11W, Traffic is a 767 at your 10 o'clock for the parallel runway"

## Sector Distribution
In order to balance workload effectively, it is recommended to distribute responsibility for the Sydney TCU sectors accordingly:

### Two Controllers Online

- SAS and SFW combined
- SAN and SFE combined
- No SFL

### Three Controllers Online

- SAS and SFW combined
- SAN and SFE combined
- SFL on its own

### Four Controllers Online

- SAS and SAN combined
- SFW on its own
- SFE on its own
- SFL on its own

## Flow
SFL will formulate the sequence in accordance with the [SY TCU Flow Table](../../../terminal/sydney/#flow). Ensure that event traffic gets priority over non-event traffic.

SFL will construct the sequence via the [Arrivals List Window](../../../controller-skills/sequencing/#arrivals-list).

Appropriate annotations for the Arrivals List Window can be found [here](../../../client/annotations/#sequencingflow).

### Speeds
CNK will instruct all arrivals to cross **BOREE** and **MEPIL** at **250 knots**, then *published STAR speeds*.

## Coordination
### APP to DIR
Standard as per [SY TCU Local Instructions](../../../terminal/sydney/#app-dir).

### CNK to SAS/SAN
Standard as per [SY TCU Local Instructions](../../../terminal/sydney/#arrivals).

#### Between ARL/CNK and SFL
SFL must **voice coordinate** any changes to instructions after ARL/CNK has put a `<` on it.

SFL must **voice coordinate** to ARL/CNK any aircraft that must be rerouted via **OLTIN YAKKA MEPIL** for **16L/34R**.

!!! example
    <span class="hotline">**SFL** -> **ARL**</span>: "ANZ361 via OLTIN for 34R please"  
    <span class="hotline">**ARL** -> **SFL**</span>: "ANZ361 via OLTIN for 34, will be"  

ARL/CNK must **voice coordinate** any requests for *Track Shortening* or *CSR* to SFL.