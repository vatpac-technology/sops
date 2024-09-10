---
  title: Tasman (TSN)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Tasman** | **Brisbane Radio** | **124.650 (17.904)** | **BN-TSN_FSS** |
| Coral† | Brisbane Radio | 133.150 (6.556) | BN-COL_FSS |
| Flinders† | Brisbane Radio | 133.150 (13.318) | BN-FLD_FSS |
| *Howe†^* | *Brisbane Centre* | *124.950* | *BN-HWE_CTR* |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

^ Refer to [Howe](#howe-hwe)

### CPDLC
The Primary Communication Method for TSN is [CPDLC](../../../client/cpdlc).

The CPDLC Station Code is `YTSN`.

Voice may be used in lieu when applicable.

## Airspace

<figure markdown>
![Tasman Airspace](../assets/tsn.png){width="500" }
  <figcaption>Tasman Airspace</figcaption>
</figure>

### Howe (HWE)
HWE is a non-standard subsector that sits within TSN. Unlike TSN, it operates as a **VHF Surveillance** sector when it is open.

Due to limitations in VHF/HF coupling, HWE **cannot** extend to adjacent HF units.

#### Sector Ownership
Due to limitations in vatSys, TSN cannot relinquish sector ownership of the HWE sector when HWE is online. Tracks inbound to HWE airspace will appear as Blue Announced tracks to both TSN and HWE.

#### Surveillance Coverage
Limited surveillance coverage exists for aircraft in CTA greater than **250nm** from LHI. [Procedural Standards](../../../separation-standards/procedural/) must be implemented **prior** to losing surveillance coverage

### Coral (COL)
The COL subsector includes the AGGG and ANAU FIRs. These FIRs **do not** have their own positions, and **cannot** be split off from COL.

## Extending
!!! Warning
    TSN (and its subsectors) are **not permitted** to extend to any adjacent Domestic/International sectors

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| TSN, HWE | ARL(OCN) | YSSY | |
| FLD, HWE | INL(SDY) | YBBN, YBCG, YBSU | |
| FLD | KEN(All) | YBCS, YBTL | |

## Coordination
### Domestic Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.

### TSN Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.

### Pacific Oceanic + AYPM
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.