---
  title: Marshall Islands
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                    | Login     | Callsign         | Frequency |
| ----------------------- | --------- | ---------------- | --------- |
| Kwajalein APP	| PKWA_APP	| Kwaj Approach	| 126.200| 
| Bucholz ADC	| PKWA_TWR	| Bucholz Tower	| 118.800| 
| Bucholz SMC	| PKWA_GND	| Bucholz Ground	| 121.900| 
| Bucholz ATIS	| PKWA_ATIS| 	|  	119.500| 

## Airspace

<figure markdown>
![Kwajalein Airspace Structure](img/kwaj_airspace.png){ width="700" }
  <figcaption>Kwajalein Airspace Structure</figcaption>
</figure>

Kwajelin APP is responsible for the Bucholz TMA `SFC`-`F245` except the Bucholz CTR.

Bucholz ADC is responsible for the Class D CTR `SFC`-`A025` within 4.3 NM of the ARP.

## ATIS
### Approach Expectation

The default approach expectation is `EXP RNP APCH`.

If visual approaches are in operation, the APCH field must state `EXP VISUAL APCH`.

### Differences from Australian Standards

VatSys by default states QNH in hectopascals and visibility in NM. However for Kwajelin these measurements are made in inches of mercury (inHg) for pressure, and  statute miles (SM) for vsibility.

Within the ATIS, the measured QNH in inHg must be prefixed with an `A`.

!!! example
    [QNH] `A2992`

## Coordination

Departures from aerodromes within or beneath the control zone that will transit into oceanic airspace should be coordinated with Oakland Oceanic.
ZAK_FSS. Departures shall be coordinated by PKWA ADC **as the aircraft is cleared for takeoff**.

!!! example
    **PKWA ADC:** "UAL154, Runway 6, Cleared for Takeoff"
    **UAL154:** "Runway 6, Cleared for Takeoff, UAL154"
    <span class="hotline">**PKWA ADC** -> **ZAK**</span>: "UAL154 Departed PKWA time 0235z, East bound"  
    <span class="hotline">**ZAK** -> **PKWA ADC**</span>: "UAL154"
