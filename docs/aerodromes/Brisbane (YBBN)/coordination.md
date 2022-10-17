---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

# BN ADC / BN TCU
### Auto Release

Auto Release is available for:  
a) PROPS or Single Runway Ops only (Not available for SODPROPS); and  
b) Jets assigned `A060` and a Procedural SID; and  
c) Aircraft departing from a runway nominated on the ATIS

Any aircraft / runway configuration that doesn't meet the above criteria, requires "Next" Coordination to BN TCU

!!! example
    BN ADC -> BN TCU: "Next, ABC"  
    BN TCU -> BN ADC: "ABC, Heading 160"  
    BN ADC -> BN TCU: "Heading 160, ABC"  
    BN ADC -> ABC: "ABC, Assigned heading right 030, Runway 19L, Cleared for Takeoff"  
    ABC -> BN ADC: "Right heading 160, Runway 19L, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4 6.16.6 3f`

#### Standard Assignable Departure Levels

Jets: `A060`  
Non-jets: `A040` or `RFL` if lower