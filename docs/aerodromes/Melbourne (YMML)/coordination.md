---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

# ML ADC / ML TCU
### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A050`;

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call

!!! example
    **ML ADC** -> **ML TCU**: "Next, ABC"  
    **ML TCU** -> **ML ADC**: "ABC, Track Extended Centreline"  
    **ML ADC** -> **ML TCU**: "Track Extended Centreline, ABC"  
    **ML ADC** -> **ABC**: "ABC, Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff"  
    **ABC** -> **ML ADC**: "Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

#### Standard Assignable Departure Levels

IFR: `A050`  
VFR: `A040` or `RFL` if lower
### Runway Change
Any Runway change must be prior coordinated to **MAE** and **EN TWR**.