---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## AD ADC / AD TCU
### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A050`;

Any aircraft that don't meet these criteria must be coordinated to AD TCU with a "Next" Call

!!! example
    **AD ADC** -> **AD TCU**: "Next, ABC"  
    **AD TCU** -> **AD ADC**: "ABC, Track Extended Centreline"  
    **AD ADC** -> **AD TCU**: "Track Extended Centreline, ABC"  
    **AD ADC** -> **ABC**: "ABC, Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff"  
    **ABC** -> **AD ADC**: "Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

## Standard Assignable Departure Levels

Jets: `A050`  
Non-Jets: `A040` or `RFL` if lower