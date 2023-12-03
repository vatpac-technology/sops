---
  title: Kennedy (KEN)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Kennedy** | **Brisbane Centre** | **120.150** | **BN-KEN_CTR** |
| Barra† | Brisbane Centre | 123.800 | BN-BAR_CTR |
| Tabletop† | Brisbane Centre | 120.550 | BN-TBP_CTR |
| Swampy† | Brisbane Centre | 133.200 | BN-SWY_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

## Airspace
KEN is responsible for **BAR**, **TBP**, and **SWY** when they are offline.  
SWY is responsible for the [MK TCU](../../../terminal/coral) when **MKA** is offline.  
BAR is responsible for the [CS TCU](../../../terminal/cairns) when **CS TCU** is offline.  

When **TL TCU** is offline, TL CTR (Class C `SFC` to `A085`) reverts to Class G, and is administered by TBP. Alternatively, TBP may provide a [top-down approach service](../../../military/townsville) if they wish.  
When **HM ADC** is offline, HM CTR (Class D `SFC` to `A045`) reverts to Class G, and is administered by SWY. Alternatively, SWY may provide a [top-down procedural service](../../../aerodromes/Hammo) if they wish (not recommended).  

Whilst the **MKA** controller is expected to provide a [top-down service](../../../aerodromes/Mackay) to YBMK when **MK ADC** is offline, this is not expected of a SWY controller when both **MKA** and **MK ADC** are offline. If electing not to provide a top-down service to YBMK, the RK CTR Class D is reclassified to Class G `SFC` to `A007`, and Class E `A007` to `A045`.

<figure markdown>
![Kennedy Airspace](../assets/ken.png){ width="700" }
  <figcaption>Kennedy Airspace</figcaption>
</figure>

## Sector Responsibilities
All Subsectors are responsible for issuing STAR Clearances for YBMK, YBTL and YBCS on first contact.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| TBP | SWY | YBRK | |
| KEN | TBP | YBMK | |
| SWY | TBP | YBCS | |
| BAR | KEN | YBTL | |
| SWY | INL(KPL) | YBBN, YBCG | Jets only |
| SWY | INL(KPL) | YBSU | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| INL(KPL) | SWY | YBTL | |
| ISA | TBP | YBTL | |
| ARA/ISA | BAR, KEN | YBCS | |
| TBP | SWY | YBRK | |
| KEN | TBP | YBMK | |
| SWY | TBP | YBCS | |
| BAR | KEN | YBTL | |

## Coordination
### CS TCU
The Standard Assignable level from KEN/BAR to CS TCU is `A070` and assigned the relevant STAR. 

All other aircraft must be voice coordinated to CS TCU prior to **20nm** from the boundary.

The Standard Assignable level from CS TCU to KEN/BAR is the lower of `F180` or the `RFL`

Refer to [Cairns TCU Airspace Division](../../../terminal/cairns/#airspace-division) for information on airspace divisions when **CS2** is online.

### TL TCU  
The Standard assignable level from TBP to **TL TCU** is `A100`, and assigned the relevant STAR.

All other aircraft must be voice coordinated to TL TCU prior to **20nm** from the boundary.

The Standard assignable level from TL TCU to TBP is the lower of `L180` or the `RFL`


### MKA
The Standard assignable level from SWY to **MKA** is `A070`, and assigned the DAGSI STAR or WELKE STAR.

All other aircraft must be voice coordinated to **MKA** prior to **20nm** from the boundary.

The Standard Assignable level from **MKA** to KPL is `F150`, and tracking via CLIFT or MUNAR.
#### Airspace
When **MKA** is online, they own up to `F150` in the **shaded** are shown below:
<figure markdown>
![Mackay TCU Airspace](img/MKAPP.png){ width="800" }
  <figcaption>Mackay TCU Airspace</figcaption>
</figure>

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### KEN Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

TBP may make changes to CFL up to the boundary with KEN for the purposes of issuing descent for YBCS.

### HM ADC
#### Departures
Departures from YBHM in to SWY Class C will be coordinated when ready for departure.  

!!! example
    <span class="hotline">**HM ADC** -> **SWY**</span>: "Next, QFA797"  
    <span class="hotline">**SWY** -> **HM ADC**</span>: "QFA797, Unrestricted"  
    <span class="hotline">**HM ADC** -> **SWY**</span>: "QFA797"  

The Standard Assignable level from HM ADC to SWY is the lower of `A050` or the `RFL`, any other level must be prior coordinated.
#### Arrivals
YBHM arrivals shall be heads-up coordinated to **JM ADC** from SWY prior to **5 mins** from the boundary.

!!! example
    <span class="hotline">**SWY** -> **HM ADC**</span>: "Via OPOSI for RNP U RWY 32, JST848”  
    <span class="hotline">**HM ADC** -> **SWY**</span>: "JST848, RNP U RWY 32"  

The Standard Assignable level from KEN(SWY) to HM ADC is `A060`, any other level must be prior coordinated.

#### Overfliers
Any aircraft that will enter HM ADC airspace, and not landing at YBHM, must be Heads-up coordinated prior to **5 mins** from the boundary.

!!! example
    <span class="hotline">**SWY** -> **HM ADC**</span>: "via OVRON, KNV, Overfleir"  
    <span class="hotline">**HM ADC** -> **SWY**</span>: "KNV, A030"

### TSN(FLD) (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-oceanic), Heads-up coordinate prior to **15 mins** to boundary.

<figure markdown>
![Kennedy Airspace](../assets/KENENR.png){ width="700" }
  <figcaption>Kennedy Airspace</figcaption>
</figure>
