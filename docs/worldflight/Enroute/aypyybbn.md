---
  title: 6. AYPY to YBBN
---

--8<-- "includes/abbreviations.md"

## Sector Responsibilities
### Port Moresby (AYPM) CTR
AYPM CTR will be responsible for ensuring the separation of aircraft in the Enroute phase of flight. No sequencing actions are required.

Aircraft shall be handed off directly to KEN(BAR). ARA is skipped.

### Arafura (ARA)
ARA has *no Restrictions or Requirements* on AYPY-YBBN aircraft.

### Kennedy (KEN) (and all subsectors)
KEN and its subsectors will be responsible for ensuring the separation of aircraft in the Enroute phase of flight. No sequencing actions are required.

#### Swampy (SWY)
Once aircraft are in SWY, KEN(SWY) may start to apply *speed control* to manage the sequence

### Keppel (KPL)
KPL will be responsible for issuing STAR clearances in to YBBN, and finalising the sequence using *speed control* and *vectors* in to YBBN.

#### STARs
See [STAR Clearances](#star-clearances)

### Burnett (BUR)
BUR will be responsible for finessing the sequence in to YBBN if required.

BUR will take responsibility for the DOS subsector, to facilitate **ENLIP** arrivals. No additional frequencies will need to be primed to BUR.

#### Sequencing
**All aircraft** must be instructed to cross **SMOKA** AND **ENLIP** at **250 knots**, then *published STAR speeds*.

!!! note
    This instruction is not required for aircraft that have a clear gap in front of them in the sequence (>30nm).

Minimum distance between arrivals at handoff to BAN/BAS is **10nm** (with no significant closing speed).

## STAR Clearances
All aircraft shall be issued the **SMOKA1A** STAR for Runway **01L/19L** by default.  

### ENLIP Reclearance
To aid with distributing the arrival sequence, KPL may reclear aircraft DCT to **ENLIP** for the following ENLIP STAR:

| Runway | STAR |
| ---------- | --- |
| 01R      | ENLIP2A |
| 19R      | ENLIP2X† |

†Aircraft on the **Xray** STAR will still expect an *Independent Visual Approach* from that STAR, unless the ATIS indicates otherwise.

Arrivals may, when suitable for the *sequence*, and clear of *01L/19R traffic*, be cleared DCT to the following points on the STAR:

| Runway | DCT |
| ---------- | --- |
| 01R      | MULNI |
| 19R      | DRAIN |

## Coordination
### AYPY DEP to AYPM CTR
Voiceless for all aircraft:

- Assigned the lower of `F240` or the `RFL`; and  
- Tracking via **LOTGU**

All other aircraft going to AYPM CTR CTA will be **Heads-up** Coordinated.

### KPL to BUR
Changes to Route and CFL are **permitted** within **50nm** of the boundary, without coordination, for sequencing purposes.  
Aircraft must be tracking via **ENLIP** or **SMOKA**

### BUR to BAS/BAN
#### Airspace
Non-Standard Airspace Division will be in use for BN TCU. Refer to [these diagrams](../../Terminal Areas/brisbane/#airspace-division).

Runway **01L** and **19L** Arrivals will be handed off to BAN.  
Runway **01R** and **19R** Arrivals will be handed off to BAS.  

#### Arrivals
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

All other aircraft coming from BUR/DOS CTA must be **Heads-up** Coordinated to BN TCU prior to **20nm** from the boundary.

#### Between KPL/BUR and BFL
BFL will construct the sequence via the [Arrivals List Window](../../../controller-skills/sequencing/#arrivals-list).

Appropriate annotations for the Arrivals List Window can be found [here](../../../client/annotations/#sequencingflow).

BFL must **voice coordinate** any changes to instructions after KPL/BUR has put a `<` on it.

BFL will **voice coordinate** to KPL/BUR any aircraft that must be rerouted via **ENLIP** for **01R/19R**.

!!! example
    <span class="hotline">**BFL** -> **KPL**</span>: "PAA001 via ENLIP for 01R please"  
    <span class="hotline">**KPL** -> **BFL**</span>: "PAA001 via ENLIP for 01R, will be"  

KPL/BUR must **voice coordinate** any requests for *Track Shortening* or *CSR* to BFL.

!!! tip
    If in your judgement, the request won't be available due to the sequence, there is no need to voice coordinate the requests. Just deny them.