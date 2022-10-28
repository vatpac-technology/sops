---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## Coordination

### Oceanic / Oceanic

Controllers must provide an estimate and level to the next sector no less than **30 minutes** prior to the aircraft's estimate for the sector boundary.

!!! note
    Brisbane – Auckland Oceanic coordination is treated as domestic and therefore requires only 15 minutes notice.

!!! example
    **BN-TSN_FSS** -> **NZZO_FSS**: "Estimate ANZ52, LEGAN 0243, FL370"  
    **NZZO_FSS** -> **BN-TSN_FSS**: "ANZ52, FL370"  
    `AIP GEN 3.4`

Once coordination has been completed, the controller must advise the next sector of any change in estimate greater than two minutes. Additionally, no changes to level or tracking are allowed without first checking with the next controller.

!!! example
    **BN-TSN_FSS** -> **NZZO_FSS**: "Estimate ANZ52, requesting FL390"  
    **NZZO_FSS** -> **BN-TSN_FSS**: "Concur FL390, ANZ52"  
    `AIP GEN 3.4`


### Oceanic / Domestic
Oceanic sectors must provide coordination to continental/domestic sectors in accordance with published policies of the respective Agreement parties.  
In situations where a policy does not specify coordination requirements, coordination for aircraft passing from an oceanic sector to a continental/domestic sector shall entail provision of an estimate and level to the continental/domestic sector, no less than **15 minutes prior** to the aircraft's estimate for the sector boundary.

!!! example
    **BN-TSN_FSS** -> **ML-ELW_CTR**: "Estimate ANZ52, GEMAC 0420, FL370"  
    **ML-ELW_CTR** -> **BN-TSN_FSS**: "ANZ52, FL370"  
    `AIP GEN 3.4`