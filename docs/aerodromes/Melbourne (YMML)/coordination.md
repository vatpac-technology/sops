---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

# ML ADC / ML TCU
### Auto Release

Auto Release shall be used for aircraft that are:  
a) Departing from a runway nominated on the ATIS; and
b) Issued A Procedural SID; and
c) Assigned A050.

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call

!!! example
    ML TWR -> ML TCU: "Next, ABC"  
    ML TCU -> ML TWR: "ABC, Track Extended Centreline"  
    SY TWR -> SY TCU: "Track Extended Centreline, ABC"  
    SY TWR -> ABC: "ABC, Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff"  
    ABC -> SY TWR: "Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4 6.16.6 3h`