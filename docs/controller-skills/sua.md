---
title: Special Use Airspace
---

--8<-- "includes/abbreviations.md"

## Types of Special Use Airspace
Some airspace is designated for particular agencies or use cases, and other aircraft are encouraged (or in some cases, required) to remain clear. These special use airspace blocks are designated as [danger areas](#danger-areas), [restricted areas](#restricted-areas), and [military operating areas](#military-operating-areas). Approval is required to operate in a restricted or military operating area, but not to operate in a danger area.

SUA is displayed on most navigation charts, with more details contained in the ERSA SUA section. They are often established to keep aircraft clear of military areas, hazards to flight, or sensitive facilities. In a number of cases, SUA can be temporarily activated, so has little relevance to VATSIM operations. However, pilots may wish to observe the flight planning and navigation requirements associated with them.

Some SUA is used for pre-planned VSOA activities. These airspace blocks are generally released by civil ATS units and restrictions may apply to non-participating aircraft, with associated reroutes and delays. Pilots must comply with any ATC instructions and communicate any operationally-relevant items which may impact their flight around or through the SUA.

### Danger Areas
Danger areas are established to discourage pilots from transiting a hazardous area. In real life they can be used to delinate airspace around many different types of hazards, including high-intensity flight training, parachuting, blasting, exhaust plumes, and more.

Approval is *not* required to enter, however pilots should be aware of the risk in doing so. They are labelled with the **D** prefix (e.g. D315, a training area south-east of Melbourne used by flights from Moorabbin).  Most major terminal areas include designated training areas which may be labelled as danger areas.

<figure markdown>
![D315 Danger Area](img/d315_danger_area.png){ width="800" }
  <figcaption>D315 Danger Area</figcaption>
</figure>

Danger Areas are not visible by default on vatSys. They can be made visible by changing the 'Map Line' when [activating](#activating-sua) the area in the Restricted Area Setup menu.

### Restricted Areas
Restricted areas are established to restrict the passage of aircraft through hazardous or sensitive areas. They are labelled with the **R** prefix (e.g. R215, the restricted area around Pine Gap, near Alice Springs). Approval *is* required to enter. Pilots who do not have approval to enter a restricted area must remain either laterally or vertically clear.

Restricted airspace is classified based on three levels of severity which impact the flight planning requirements surrounding them. The classification of each restricted area can be found in the `ERSA SUA` section.

| Classification | Flight Planning Requirements |
| -------------- | ---------------------------- |
| RA1 | Pilots may flight plan through the restricted area and under normal circumstances expect a clearance from ATC |
| RA2 | Pilots must not flight plan through the restricted area *unless* on a route specified in the ERSA Flight Plan Route (FPR) section |
| RA3 | Pilots must not flight plan through the restricted area and clearance **will not** be available |

<figure markdown>
![R215 Restricted Area](img/r215_restricted_area.png){ width="800" }
  <figcaption>R215 Restricted Area</figcaption>
</figure>

### Military Operating Areas
Military operating areas are a subset of danger areas which are established to facilitate a range of military operations. They are labelled with the **M** prefix (e.g. M301A, which makes up part of the military airspace within the East Sale TMA). Inside Australian territory, approval *is* required to enter an MOA.

On VATSIM, MOAs are generally assumed to be deactivated unless being actively used for a military exercise or other purpose. ATC (when online) will generally try to reroute civil aircraft around these activities or will otherwise organise a transit clearance from the station responsible for the airspace.

<figure markdown>
![M301A Military Operating Area](img/m301a_moa.png){ width="800" }
  <figcaption>M301A Military Operating Area</figcaption>
</figure>

## Airspace Boundaries
The boundary between two classes of airspace takes the form of the *least* restrictive class.

!!! example
    A restricted area with a vertical definition of `SFC-A085` may be overflown **at** `A085`, as the aircraft will be deemed to be in the least restrictive class of airspace at that level.
    
## Activating SUA

<figure markdown>
![Danger Area Activation](img/d535b.png){ width="700" }
</figure>

<figure markdown>
![Danger Area Activation](img/d535a.png){ width="700" }
</figure>

## Separation
It is the pilots responsibility to remain clear of Restricted Areas, however, that does not mean they always do!

### OCTA
Outside controlled airspace, it is the responsibility of the controller to provide Safety Alerts to aircraft that will shortly enter, or have already entered, active restricted areas.

!!! phraseology
    **CBW**: "Safety Alert, VFR aircraft overhead COTR tracking southbound 2500, you will shortly be entering R430 restricted area, clearance not available, suggest immediate left turn to avoid"

!!! phraseology
    **CNK**: "VFR aircraft overhead YCNK 3500 tracking westbound, confirm you will be remaining clear of the R564 restricted area?"  

    To which they will almost always reply with either *"Affirm"* or *"Huh?"*

For aircraft unfamiliar with the restricted area, provide *suggested* headings to avoid. Get the aircraft to squawk ident to temporarily identify them. Remember that you cannot vector aircraft OCTA.

### CTA
You must separate all aircraft in controlled airspace by *half the applicable lateral standard* from a Restricted Area (ie, **1.5nm** for TCU, **2.5nm** for Enroute). Aircraft operating at the vertical limits of Restricted Areas are considered to be separated from it.

