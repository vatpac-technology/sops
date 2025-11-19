---
  title: Scherger TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                          | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Scherger Approach**         | **SGA** | **Scherger Approach**   | **124.200** | **SG_APP**    |

## Airspace
The vertical limits of the Scherger TCU are `SFC` to `F245`.

<figure markdown>
![SG TCU Structure](img/sg_tcu.png){ width="700" }
  <figcaption>SG TCU Structure</figcaption>
</figure>

### Airspace Division
By default, SG APP owns the Class C airspace within the SG MIL CTR `A015`-`A040`, as well as the following Restricted Areas, as detailed below:

- R604A (`A040`-`F125`)  
- R604B (`F125`-`F245`)  
- R605A (`A040`-`F125`)   
- R604B (`F125`-`F245`)  

The above Restricted Areas are classified as Class C when SG APP is active.

<figure markdown>
![SG TCU Restricted Areas](img/sg_restricted_areas.png){ width="700" }
  <figcaption>SG TCU Restricted Areas</figcaption>
</figure>

!!! note
    See [VATPAC NOTAMs](https://vatpac.org/publications/notam){target=new} for active NOTAMs which may affect military operations.

## Coordination
### Enroute
#### Departures
Voiceless coordination is in place from SG TCU to ARA for aircraft assigned the lower of `F240` or the `RFL`.

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! phraseology
    <span class="hotline">**SGA** -> **ARA**</span>: "ASY219, with your concurrence, will be assigned F200, for my separation with ASY404"  
    <span class="hotline">**ARA** -> **SGA**</span>: "ASY219, concur F200"  

#### Arrivals
The Standard assignable level from ARA to SG TCU is `F130`, and tracking via WP VOR. All other aircraft must be prior coordinated.

!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}
	
### SG ADC
#### Airspace
SG ADC owns the Class C airspace within the SG CTR from `SFC` to `A015`.

#### Departures
[Next](../controller-skills/coordination.md#next) coordination is required from SG ADC to SG TCU for all aircraft.

The Standard Assignable Level from  **SG ADC** to **SG TCU** is:

| Aircraft | Level |
| ------- | ------- |
| All | The lower of `F240` and `RFL` | 

