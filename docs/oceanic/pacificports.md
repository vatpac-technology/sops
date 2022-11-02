---
  title: Pacific Aerodromes
---

--8<-- "includes/abbreviations.md"

# Pacific Positions

## FSS Units

* **NZZO_FSS**: "Auckland Radio" on 8.867 (aliased as 129.000)
* **NZZO-E_FSS**: "Auckland Radio" on 5.643 (aliased as 131.500)
* **NZCM_FSS**: "Mac Centre" on 9.032 (aliased as 128.700)

## Tonga Positions (NF**)

### TMA

* **NFTF_APP** "Fua'Amotu Tower" on 118.500
    * **Limits**: There are three layers to NFTF_APP's area of responsibility:
        * A circle 23nm in diameter, centered on TBU VOR from SFC to 3,500ft.
        * A circle 75nm in diameter, centered on TBU VOR from 3,500ft to 9,500ft.
        * A circle 100nm in diameter, centered on TBH VOR from 9,500ft to 19,500ft.
    * Fua'Amotu would hand aircraft off to NZZO_FSS upon crossing the boundary.

!!! info "Why is their callsign Tower, not Approach?"
    We've had to implement this position with a `_APP` suffix, as the FSD restricts `_TWR` callsigns to a visibility range of 50nm. 

### Towers

None! NFTF_TWR is covered by NFTF_APP.

### AFIS

* **NFTL_FIS**: "Lifuka Radio" on 118.100.
* **NFTV_FIS**: "Vava'u Flight Service" on 118.100
    * This aerodrome weirdly has a Ground service on 121.900, but only an AFIS over top.

## Niue Positions (NI**)

Niue only has a Flight Information Service, providing only traffic information. This will be modelled as **NIUE_TWR**, with a standard Tower visibility range of 50nm. The Tower is to provide a traffic information service, in addition to relaying IFR clearances from NZZO_FSS.

**Departing** 

Departing aircraft should make contact with NZZO_FSS upon passing 20DME from `NU`. If unable to gain contact, they are to remain with NIUE_TWR until they have positive contact.
 
**Arriving** 

Arriving aircraft will be given clearance to leave Controlled Airspace on descent through FL245, however should maintain a listening watch on NZZO_FSS. Aircraft should attempt to make contact with NIUE_TWR around 40 DME, and shall report that positive contact to NZZO_FSS before dropping that frequency. NIUE_TWR will report your landing back to NZZO_FSS in order to close your flightplan.

## Samoa Positions (NS**)

This section covers both Western Samoa and American Samoa.

### Enroute

There are no real-world Enroute Sectors operating above Samoa, however due to Samoa's complex Approach sectors and large TMAs, we merge them into a single Faleolo Control Sector.

<center>
  ![NSFA Enroute](assets/nsfa-control.png){ width="450" }
</center>

* **NSFA_CTR**: "Faleolo Control" on 126.900. 
    * **Limits**: Vertical limits differ. Includes the main sector to the West, and the 'R' sector over Pago Pago.
        * The West Sector is from SFC to FL245. 
        * The East Sector is from 3,500ft to FL245.
    * The West Sector provides an Enroute Service for NSFA, and interfaces directly with NSFA.
    * The East Sector provides a TMA service to NSTU, but **does not** provide a Tower service, as the lower limit is 3,500ft. 

### Tower

* **NSFA_TWR** "Faleolo Tower" on 118.100
    * **Limits**: SFC to 7,500ft. Lateral bounds as shown above.
    * Provides a Procedural Approach service for NSFA. Also provides a control service for NSMA to the west.

### NSTU

NSTU (Pago Pago) is an interesting aerodrome. It is normally uncontrolled, with a combined App/Dep above it, starting at 3,500ft. On the network, this service is to be provided by NSFA_CTR. 

A tower position will be established on the network for NSTU, as an Event Only position on 122.900. While not incredibly accurate, it will be helpful when an event in underway in the area. The NSTU Clearance position will not be modelled.

## Cook Islands (NC**)

Cook Islands airspace covers a substantial area, which unfortunately cannot be modelled with complete accuracy on the network. Because of this, a solution similar to Samoa would fit nicely.

<figure markdown> 
  ![Rarotonga Enroute](assets/raro-control.png){ align=right width="450" }
  <figcaption>Right Click and open in a new tab to see full detail.</figcaption>
</figure>

### Enroute

* **NCRG_CTR** "Rarotonga Control" on 118.900
    * **Limits**: 5,500ft to FL245, with the lateral bounds indicated as above. Roughly 340nm by 260nm.
    * Provides an Enroute radar service within its' lateral bounds.
    * Additionally acts as the Enroute interface between NCRG_APP and either NTTT or NZZO FSS.
    * Provides a top-down service to NCRG when NCRG_APP is offline.

### TMA

* **NCRG_APP** "Rarotonga Tower" on 118.100
    * **Limits**: There are three layers to NCRG_APP's area of responsibility:
        * A circle of 30nm diameter centered on RG VOR from SFC to 5,500ft.
        * A circle of 50nm diameter centered on RG VOR from 5,500ft to 9,500ft.
        * A circle of 70nm diameter centered on RG VOR from 9,500ft to 14,500ft.
    *  Provides a combined Approach/Tower service for NCRG.

!!! info "Wait, another Approach station with a Tower callsign?"
    Similar to `NFTF_APP` above, we've had to implement this position with a `_APP` suffix, as the FSD restricts `_TWR` callsigns to a visibility range of 50nm. 

### NCRG
At the moment Rarotonga has a Ground station defined, using a frequency of 121.9, which is Tower's secondary frequency. There's no reason for having a ground station for any reason **other** than to provide Pre-Departure and Start Clearances. Ground will be removed, and replaced with an Event Only delivery frequency.