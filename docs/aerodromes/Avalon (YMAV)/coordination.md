---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## AV ADC / ML TCU
### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A040`;

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call

!!! example
    **AV ADC** -> **ML TCU**: "Next, ABC"  
    **ML TCU** -> **AV ADC**: "ABC, Track Extended Centreline"  
    **AV ADC** -> **ML TCU**: "Track Extended Centreline, ABC" 
    `AIP GEN 3.4`

## ML TCU / AV ADC

ML TCU shall notify AV ADC of the arrival sequence by coordinating the arrival direction and current position.

## Runway Change
Any Runway change must be prior coordinated to **MAE**

## Standard Assignable Departure Levels

All Aircraft: `A040` or `RFL` if lower