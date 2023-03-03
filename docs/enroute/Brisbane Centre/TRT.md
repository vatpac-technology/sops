---
  title: Territory (TRT)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Territory** | **Brisbane Centre** | **133.200** | **BN-TRT_CTR** |
| Kimberley† | Brisbane Centre | 133.400 | BN-KIY_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)
## Airspace
TRT is responsible for **KIY** when they are offline.  

<figure markdown>
![Territory Airspace](../assets/trt.png){ width="700" }
  <figcaption>Territory Airspace</figcaption>
</figure>

## Sector Responsibilities
TRT is responsible for sequencing, issuing STAR Clearances, and issuing descent for aircraft bound for YPDN.  
KIY is responsible for issuing descent and ascertaining arrival intentions for aircraft bound for YBRM.

## Coordination

### TRT/KIY / ENR
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

### TRT/KIY Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

### TRT / DN TCU
The Standard Assignable level from TRT to DN TCU is `A100` and assigned the relevant STAR. 

All other aircraft must be voice coordinated to DN TCU prior to **20nm** from the boundary.

The Standard Assignable level from DN TCU to TRT is the lower of `F180` or the `RFL`

Refer to [Darwin TCU Airspace Division](../../../military/darwin/#tcu) for information on airspace divisions when **DAW** is online.

### KIY / BRM ADC
#### Departures
Departures from YBRM in to KIY CTA will be coordinated when ready for departure.  

!!! example
    <span class="hotline">**BRM ADC** -> **KIY**</span>: "Next, ANO333"  
    <span class="hotline">**KIY** -> **BRM ADC**</span>: "ANO333, Unrestricted"  
    <span class="hotline">**BRM ADC** -> **KIY**</span>: "Unrestricted, ANO333"  

The Standard Assignable level from BRM ADC to TRT(KIY) is the lower of `A050` or the `RFL`, any other level must be prior coordinated.
#### Arrivals
TRT(KIY) must coordinate the sequence to BRM ADC prior to **5 mins** from the boundary.

!!! example
    <span class="coldline">**TRT** -> **BRM ADC**</span>: "New Sequence of 2. Via SAFIR, FD621, Number 1. Via MASIM, NWK1654 for the RNP U RWY 10, Number 2”  
    <span class="coldline">**BRM ADC** -> **TRT**</span>: "FD621, Number 1. NWK1654, Number 2"  

The Standard Assignable level from TRT(KIY) to BRM ADC is `A060`, any other level must be prior coordinated.

#### Overfliers
Any aircraft that will enter BRM ADC airspace, and not landing at YBRM, must be Heads-up coordinated prior to **5 mins** from the boundary.

!!! example
    <span class="hotline">**KIY** -> **BRM ADC**</span>: "via CIN, NQC"  
    <span class="hotline">**BRM ADC** -> **SWY**</span>: "NQC, A045"

## KIY / IND(INE) (Oceanic)
As per [Standard Coordination Procedures](../../../controller-skills/coordination/#enr-oceanic).
### TRT/KIY / International (WAAF)
Coordination to International units must be done prior to **15 mins** from the boundary in the following format:

- *"Estimate"*
- Callsign
- Boundary Point
- Estimate
- Level
- *"On climb"*/*"On descent*" (if applicable)

!!! example
    <span class="coldline">**TRT** -> **WAAF CTR**</span>: "Estimate, SIA236, KIKEM time 21, F320"  
    <span class="coldline">**WAAF CTR** -> **TRT**</span>: "SIA236, F320"