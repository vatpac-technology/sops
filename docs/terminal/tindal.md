---
  title: Tindal TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Tindal Approach**    | **Tindal Approach**   | **120.95** | **TN_APP** |

## Airspace
### Default
By default, TN TCU owns the airspace within the TN MIL CTR `SFC` to `F190`. This may be amended by NOTAM.

!!! note
    It is the responsibility of the TN TCU controller(s) to negotiate any airspace releases with TRT(All).

### ADC
When TN ADC is online, they own the airspace within the TN MIL CTR A (`SFC`-`A025`). This may be amended/released as required between TN ADC and TN TCU.

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Coordination
### TRT(All)

#### Airspace
Any airspace releases from the default setup must be coordinated and agreed upon with TRT. It is also good practice to remind them of any airspace releases that may be active due to NOTAMs.

#### Departures
Voiceless for all aircraft:

- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F190` or the `RFL`

!!! note
    Aircraft are *not required* to be tracking via the **SID procedure**, simply tracking via any of the terminus waypoints (Regardless of *departure airport* or *assigned SID*) is sufficient to meet the criteria for **voiceless coordination**

All other aircraft going to TRT CTA must be **Heads-up** Coordinated by TN TCU prior to the boundary.

!!! example
    <span class="hotline">**TN TCU** -> **TRT**</span>: "DRGN48, request DCT BEBEX"  
    <span class="hotline">**TRT** -> **TN TCU**</span>: "DRGN48, concur DCT BEBEX"  

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YPTN**; and  
- Assigned a STAR; and  
- Assigned `F115`

All other aircraft coming from TRT CTA will be **Heads-up** Coordinated to TN TCU.

### ADC
#### Airspace
TN ADC owns the airspace within the TN MIL CTR A (`SFC`-`A025`). This may be amended/released as required between TN ADC and TN TCU.

#### Departures
'Next' coordination is **not** required from TN ADC to TN TCU for aircraft that are:  
a) Departing from a runway nominated in the ATIS; and  
b) Assigned the standard assignable level;  
c) Assigned a **Procedural** SID  

!!! example
    <span class="hotline">**TN ADC** -> **TN TCU**</span>: "Next, MVP"  
    <span class="hotline">**TN TCU** -> **TN ADC**</span>: "MVP, Left Heading 010, Unrestricted"  
    <span class="hotline">**TN ADC** -> **TN TCU**</span>: "Left Heading 010, MVP"  

The Standard Assignable level from TN ADC to TN TCU is the lower of `F120` or the `RFL`.

#### Arrivals/Overfliers
Voiceless coordination is in place from TN TCU to TN ADC for arrivals cleared for an approach on to a runway nominated on the ATIS. All other aircraft and all overfliers must be heads-up coordinated as soon as practical.

!!! example
    <span class="hotline">**TN TCU** -> **TN ADC**</span>: "via TN, ZULU, Close formation of 5, do you have any restrictions or requirements?”  
    <span class="hotline">**TN ADC** -> **TN TCU**</span>: "ZULU, no restrictions or requirements, A025"  