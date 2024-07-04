import '../styles/Marquee.css'

const Marquee:React.FC = () => {
    return ( 
        <div className="Wrapper">
            <div className="icon icon-1">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_99)"/>
                    <defs>
                        <pattern id="pattern0_11_99" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_99" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_99" width="50" height="50" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_98)"/>
                    <defs>
                        <pattern id="pattern0_11_98" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_98" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_98" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADwklEQVR4nO2aWYhPURzHP2MGYx0Tk+wxJKVMCY3JAx5EthdLEbK+8EDJA94sGR4oSZKpKSHZIlnCvI03IkujjCU7YxmzmGGuTv1uHbdz77n3/ufO/4pv/ZrmzD339/ue5bfdgf8Ihc5AV/5SjAUqgDeAI1IP3AHKgRH8BVgJ/NAImET9fRMpxlTgp4WELqtIIXKAuxFIKPkM9CJlKI1IwpXVpAy7NON+iTiWMSWnSBkui2F1wChgtBwdvzFX3suxTA2eimGbtbEtAWO6DCNFqBOj1Mq7GB0wpstcUoQWMSofOA1USkR35OdpuQ/5BiLbSREckSFAk1zsRu1CtwLfgYEGImdJERzNKJN3coTYecN4LSmCo0kbsBvoB4wDtgKvLfFE7WQqoBu12CcLnh1AZD0pgaNJuSE2FANnAojcTUM8GWEw7DDQWy73Xs2rBcm8bBPZF8JIdW+Oa/HGJC+AgmyRmGhI3d/JUVG70AxclecUllkIH80GiTyf1H2bZd5Fy87NpIOx1mDIR6DQMm8Q8CWAzBugqIM40AV4ZjBiQ8j5ayxHrIIs7kaNxIsw6AQ8shyxMjoAJiMWRnyH7eJXkTAm+OyGWuWozuKlhUwpCeJABnfDi/0WImdICJ0lTujKmiSKx8EUC5HmDN4duVui4kJcdDIsjOORJSSALQm0dNzGhZ+cIAGcNCgan+E791iI1JAA7hgU2SK5DUstRBpJACp1KJFmgqtoQIbvVNXhdKCH/K7aQ4ukLG6TpDQx5EgB5e1btTcWANfa+6XzJaKrOJIrY+eAb57eVRyoXX4ujYuHEl8SqU3meKq8gzKuGgyvpNOoGg2ZuOF7nruhUph2xXJDqdomzQSFGTLWKsfNPethMVdbrLfAB2CHHN+8GDncH1gHVEt94edNlNK+8nylp2SN4pJrfY5RDnAIeJAJkU8Wl+gtTYs8c5SbDpvyqOfvyw73kcWZJiWyu/v94xLRVzhI2iRfcnfRHW8IqacgpJ5LQLc4RGaFVODI1neRo3BTxo6E1GPqBTs+8iRO597U/g+SnTJvqKT0rnu2oSyinvqoRDZGVKCi7yQtMgeVvGr3RsbQ0xAnQa2JSETJDZk7Ro6b+vw8WHvnUKn1H2t9risR7shwYqAqBpGvMrenZ7zFEIfcYimoLeSIa87oi1YPWb2TErnDEFHuFzHS9mx3eTYoTh1Lojosll7UhYB/0VB5l5tuFFrE7bzf8ilvV9AB6CueqVrSEnXRr8f8WFMiwbNVSNwGJpMFqI+b7YFc8Wb88/gNdO2Pkmb9p7MAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-3">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_78)"/>
                    <defs>
                        <pattern id="pattern0_11_78" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_78" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_11_78" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFNElEQVR4nO2dW6hWRRTHf1s9XajUsqgHpatKYGaRVlSHHrpYIETpa/TkY1KEPXVR1KgoiGMP0T3oRhJxKs5DmVGJWZDQQ+np9iCWnvJSBubRGhlaBz624Lf3t2fPrP3t9YMFB845+5uZ/7dnZs2sWQOGYRiG0T7mA+uBbcA+sW+AIeCy1IVrE/OAEcB1sRH5W6MmZgDPAEcKiDFh/wKvAeeZKuE4CVgBHCghRN7+Bh4FTjVhqrEE+KmCEHnbCdwNZCZMORYCnwcUIm9fATeYKN2ZJX3+fzWK0WnvAxeZMMdzuvTxhyIJ0WmHZbIwzYSBSdKn704ghMvZHzJ5mNJWYW4CvlUghMvZdmAZLeJS4AMFDe+62MfA5fQxZ0tffVRBY7s2O5YTjt2fChrYtdmxzKQv/llBg7qAjuVymYw0ikXAFwoa0NVkXwODNIDYjp1LbN6xvBiFpHTsXGIbl8nKdBQwRfrUPQoaxiW2vcCDMolJglbHziW2HbEdS+/Yfaig4k65bQQW1D2NXSF9ZurKuobYURlbg0+T/QPfVVBB11DbEFqURxRUysmq8Jvypt4KzAHOlIH0ZOAcYDawGFgJvA6MKSi3t4dD+hZlAgvqmL0MibPZC5OBa2VqmnL5xrfhzBCCrEtUgV3AfcBphOMM4N6E0/Q1ISqxNXKhx4EnAguRZ5p8RuwJypchCv97xAKPAlcQj0WBo1q6mW/LysQq7HvAVOLj35bhiPWsTIxCvpJ4L3sy8KIJ8r8YzysJXMsiiVKZursp/+3UwgDwUVsFGU00ZnTjRtlLb5Ug4xVnU1cCq4BNwPey531YPPnPgMdlR69MV+i9/OciBGFUpo5CeR+gLBmwVOKmyiyF39OlWxwQB3R/zUKoFWRXD07fhcCWig6ZX/fKs1jesBhCqBXEfxvLMBjIOfXnS26RZ85JGKynSpC9Jd+OQRkbQn3+P+LzhHxmowXxq7ZFuUDR0nnfCuIP4hQdwLcoaLy+FmRPiWnoMgUN1/eC+J2+ImQlp7Z1NVRd/1eZUBX2265FnT5ngtQviN8DL8JqEyTOG1I0BnaTCRJHkLMKCjKaaMzoRtX/UzeGFI15PWiC6BLkLxNEV5e1wwSJI8glBQX5xAZ1XdPeVSZIHEHMMUTXLOutgp+X2dKJvsXFuxJ1WzGsMiELc3XBz8yAzQoar+8FKbNBdX6fHiZVJUjqLdxDtoV7fKPcX/ILMRhoK9eH+dwsz7Qgh46G+VUSDZQNA9pc8USsP+qWx8KApIGepDwZcCfwXQkhfMzVHV2e2/pAuYlQUr8z2CsL5CDqRmn0gxLi8xvwKfAYcL2FkpbrRn6wYOveqHMKOKws6eSApPars86VcTXbC0oO7EwCXo5Q38q4CPaqgiNtL0Wqa2VcJBtOlMx4euTA60Ydi/4RuIp4XAP80rRj0VsTpKB4WrIu1PlWPNXUxAFrIxfaifnjaQ/04NWfiKmyUTbW5NQaqZPP7AOele4l63HAvk5WmmNFtNSafAZJLeQU2BjwtpzCug2YK1ch+RCjU4BzZeHwdsl/+EbkMfBE9hCB5+gbFFTKNdTeqcPXshR/6Enx14klwURHEsw8liYWHWliO7FEyuhJpNyJpRpHR6rxPJaMXyl2XYVC7EIXpdiVR0qxS8GUYtfmKUWrY7m9bRdLdmJXryrFLidWyiy7vlsnC+2Ce50sCZwsf6dcF64hMK/xjuWBtt9lq40ZckvOkbbf9qyNecBIATFG5G+NSMwH1gPb5Ljafvl5SH5nGIZhGLSJY9rl0o+acpmXAAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_80)"/>
                    <defs>
                        <pattern id="pattern0_11_80" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_80" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_80" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACg0lEQVR4nO2av08UQRSAP4GACkKBGhMNBQXRBjtDg5UxYKVEC2Jig0jpnyBCdVoY1PAHWBA7UUuNlZ1R/JVoRYwgsTCoh8Z4CkM2eSaXdXZ3dnb3dmfhJS+5u+x7c9/u2zcz7w1sy9aRAWAe+Co6L785I4eAO8AGoDT6EOilwNIOTAK/AgDq9TcwA3RRIGkCLgCfDQD8+gW4DLTkDXECeGUB4Nd3wLk8AA5LrKuU9RHQ3wiAbontPxlA/NN1SRYHsgBolVj+liGAX39I8tiVBsAOid3FBgIony4BlySpWMkx4GmOAMqnz4DBuE/hesiElqduANdMQSYSDvYRuAUMSXbzJso24CBwEqgAHxKOcdEE5K2l82UZoNlgDO+a0QRAr01AahaO7wN7iC+ezZzFeDUT53Gd3kySUeSdvGExbqTEfRJJIOphnuQFshwSTvuBaWBBJrY14AUwBezzXdsD3LXIkpFi6mgswP4sUA2x8zZZZ4DdwBXgp+ULHymmKbY5AMLkzv4FVkL+nAr4njqIN0/owinsScS5y6pRIMMau+kUAKIkdZA+jd1LF0E6NHZrCcMql9DSpd2qiyB9GrsFF0NrWGM35SLIbY2dN2N/dy20lgJqUSNSPHBmQlTAeID9SESRYhU4XZQligI+hSwa9wJXgeeSlqvyeVJKSoVaNCrgQRmW8apu3ZV0YzWTRWjVLJx65dNOC4hOCatMtrpvLF++FSmkmVTWvWvOy3Ygs+LDuKXz+p3jLHAKOCLrsp3SABqSmpktgIrY1P0nlQIX6CqUoGR6nK1cxC5VW6F0jZ5Gtd4eA0dxuBn6Pq9maOna06U6MFC6IxxRh2ruuXaoZltIIJswbZ297D2UbAAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-5">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_82)"/>
                    <defs>
                        <pattern id="pattern0_11_82" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_82" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_82" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVR4nO2ZaYiOURTHf8bY92Us80HZikRCIkvWUChJg/CND5bkA0qJiWSkGKLIUkRiqMFYa4qZJssgH5A1FCKjyFLGeHXrqKfbue+zvb3PyPzrfnjf59z/vf/nuefcc8+FBjTgv0EeMAvYCdwF3gPD+QfQFZgDFAPVQB2Qstox6iHyZeL7gAfAb2XiKat9A1onPfFewCKZ+IsAk0452tykBOQAVTEmnrJaaVJCpmRQRAr4CXRKQsjpgBP8AlQCe4GnPraLsy2im7xBeyJvgXPAVvGbAbIEDfoCtT5CyrMtZCVwQxx8KTAaaOvT56gy8SfW7zqJehlFR+CWMvhDoH1Irv7AL4vnJjBd4V+VSREtZV3bg3wE+kTgO6FwTQWaCKf3f/PyMgJDfsERVcZF4Bug7Oa3gUbyfL8ylvGnWMhxvD2zOy/MYHSb4nk+UXm+Pq6QYkc02RSRb6DyNaqUl/fGsnkUR8Rmh4gSTwgNi1KFb7Jit0uxGxxlwGUOEdXi+FEwVEkYqxy2o5Sxi8IOuMiRob6SjS8qyhTOSQ5b4/gvLdtnYQab4dhtTVoxKIaIEQpnhU+fbZb9vaCDjQS+KgMa55xJPFxReCf49Bmi7DO+MG/7k8MvTPoRB9p6N5trEDwUexOyfdEbeOcQcYD4KFd4xwfsWwh8B3r6GebHPMVFaUG/hkE/YAMBcCfLIlIh05rmwLQghrcTEDI7hJBJssubzDstOsg5IptC3gWZmKBI+hwnANo5UnTTTkr2GwcnFd7DAfve9fQpCNKhFXDVIeZUTDFdgA8+Ga+rAulNMM1OHwhNgTMOMeeBZkRHgSPlaZOmzzzL3hQqAiMXOOIQUyZRJCpOKZy709gfsmzNGT8UGgMHHWIuxhDTWQrUXr46YIzD/rVluzzKoCb73OEQcwloEVHMXIXvscLXT7EbRgwUOsRcjiGmROHbYtmssJ7/EB+OhbUOMdciVszzlCVWKwevvzgbI61Ji6WOw9Z1n8jjwnyF676EeRNwPlvPtpNBLHZcylREFKNVU9ZJldL+39yvZBTzHeeWKGLMsblG8QWt/NSDLGI18NxTtF4iSV/3NH0WOPzP20zSWC8q8in5itWSd22UpWKcu1WabOJvM1Gu3t6ReDfEGh+bNUkImRpSSCpAG5uEkJw0R4IorVaWX2LoIGF0idSPK6U2FlbIHeop8iWSrZTbrUqpkriE7OEfQq7cYM2R3K5EEslPSflHA/5r/AHlt9Phzd8lpAAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_83)"/>
                    <defs>
                        <pattern id="pattern0_11_83" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_83" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_83" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDElEQVR4nO2YSWhUQRCGPzWuQQhuiPsCSryIguACIujFmxoRb+7GFfUk4iXkogjiRjAKooSg4sWbpyDRiygmUdwu7qJR466Jk5hkpKECzfhmut6b92Z88H6oW1V1fzPdVfUaEiVKlCgEzQFuAl3AbWAxMdRI4CuQtuwPsJeYaUsGhG11wFBios05QIzdBSYSA40FPjlgPsTl3iwEPjpgTCHYSQw0AbjjgDFWH4d7MwQ4r4BpAiZFtYFjQKtiE2FZK7AobJCTBQSwrROoDAuiH/ClSCBpsTPAoDBAPhcZJA08AOblC3PiPwBJy2hTme9lP1rgy57OYdVEqOUew2GUti9sAHOH9gPdyg38BGqBFcBkaX6lwDRgjfSZ34o83WGW52HAZSVAr9y1MkXeMcAFRc5nwOB8Icyv2aKEMHPUKivWTLtHgEdAB/ALuC9n30DYnwA9jtx78oFYohgCbdtgxVYAP3L4mkl5meV/wJH7DdA/CMQuKYNaiAYrdoEytgMol5gBwD2H/1I/AOYsngtQXewj1eAj7pIVt83ha46pSuOAWwEgjI2SHObvT/mIe2utX+7wbdRAzJekQSC6pTznCzLC4fvcBbHR5+JeNjrg0bpoxc1y+H7LBlACnFJeyl6HT0XGv9ulyNsOzLTitjv8TQX1bHLXFYu9AuYC7x1+JpetlcD3HP5tGVWoRHpMrjUeeoHUKiBuWI2rUeG/KWON8cBhGc3bpSE2A1VWcejTQUX+K3iozRFUAwy0/KsUC5njtBr/qlQcXWM7vIKzVaiUPLZlarpijEjLhmqkAmnewuoVOfsqo3mh+UfVHs7v5G0qm64pF03LMTorjXKK3MlS+UHWyjNqyke+q9k2ZUaCQzLzdEiHNWfaNXtpjkDY1gPMJmSdLgLIcSLQcOBpASFa5FhGoqnSX6KGeFmIF3xzaV9HCPFYikRBVCazUtgQdVLhCq518gWXL8CTgA01VJmnzvUyjvgFaJLeEuhTNkqZYrBVXl7Mh9oLmbU6ZTRqlr61G5hR7M0mSpQoEZHrL0yFrsRExrb6AAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-7">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_84)"/>
                    <defs>
                        <pattern id="pattern0_11_84" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_84" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_84" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOElEQVR4nO2ZPWgUQRTHf4kB67RaWKS0EMXYGLyc6Lmk9xAtjKRLulTBUtDG4jwr5RCvsAwkF7DRYgtBRLTx9FIFAklIisNKQc6PkYF3sAy3t3fr3u7MuX94LMw85s1vZ+fNx0KuXLlyjauOAR5QBbaA1yOyhsTwJGaiKgItQKVsX4BCUhB3gJ8ZQCgxHXsxiZHIEkIFYGKPjP4+P1sAocS2gak4IAsWdF4Zdi0OSNWCjivDKnFAtizouDJsMw6Ib0HHlWH+KEGaQA14Kk89koeugTRDMskkUAaOXAGpR7RxCjhwAeR5wH8auAycNNrxXAOZl7I/wH2jrU8ugiixc4G6xy6DlAN194y678AOsDvkXs5PG+SbMVfqUt4GbhmZ7jiwAvywBWQO+Ap8BK4YHdVpuAOc7RPvpi0gYVoT3ycRfhPAnq0g5cAcWAqU3wB+SV139E7I3LEGRK/qF4AXkoq7vqsBnxngAfAIWJdz+iC7gFTnSFgW+tDnMuG8ZDFlY/rtZQ/7wMwOkIqtAdH2DlgGrgMl+RS7euUCSFvmxHuj/EygjZoLIHrziCyGlyRbzQ4Z009jG1+M8L0YEU/D/bbhYHU3wlfvgE+HxNIvYT/ro66++3o5wNtUsk15AzyTo7Ee0bfGeqOyAknT/DggDQs6rgzb+K8v6DwLOq4MuzoOl9ituJfYyFW+Db8VOrLO/JMWM4bpALdJSIWMPrNmEiPRa86UJHM0RvwztCKxEv8ZmitXrlxYob+kMYmNCtEPqwAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-8">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_85)"/>
                    <defs>
                        <pattern id="pattern0_11_85" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_85" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_85" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAUlEQVR4nO2av0scQRTHP3hqqtMjnAmEBH9A2iDiH6CFkGAXtUkag0LEyiYQiNU1WonYaCE2VnoHUfEPEGxMY+F/IEmUJAoX7rhCTSYsTGR57Lor3t7M4nzgNbP3hvd933vLHHPgcDhuSwdQAqqAsiyqurZ8HCElCwpWEbEZR4iNTigRlThCVEoiEtMFKidEYLrTyjkiMN1p5RwRmO60co4ITHdaOUcEpjutnCMC051WzhGB6U4rGx2Js/dn4JX+id0MPAGGga20CPkDvIuoZUJ/zmohC3GKAeZsFvIXeCaeTQHrwAyQ0WtPgV2bhfwQ64MibwWYBn7bPiPfxfpAHfY2IuQSaBPPZoFa2oQo/UaSPAYKwFmahPwEekJqyAIfgXIahHjxSw96GM+BozQI+f8q3gb6Qup5CBynQYg/9oChgLz3JoVc3WHvgsjraoSQmn51Lot17+vg50HAsI8BxYA9yyK3NWkhO0C3zvNOrvO6wHNgXOzbKe43vNOuRw44FPvui9xHSQt5TXze+vJGAtyaBJaAD3rA/YwmLeTE58hNNAFffHmnAYfGMFoCHEtkRr4BvREiFgPyvgIvImrJhsxQIkK8uABW9eEvp7vodfwNcBCRtwa81MeTDNAO9AOfdJNUI4WYiPtzGVq0oFBVj+vpvBZTsdSJjbh/GHA4HFzzDyHa7x0cR+5hAAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-9">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_86)"/>
                    <defs>
                        <pattern id="pattern0_11_86" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_86" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_86" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2ZP0gcQRTGPyEWYkTPgMQ0wWBhLExSKTZnESLBwipWUeFIJIWSwkCQiIWCiCHNpVIQ1CoRRCGGKAnYSGKhNgEb74qAFv7BgAZB7/RkZZBluHm3t/vGG8x88Jrbt983v92d25k7wMrKyuq66R+AVI7rkAMkbgBIjAPklwEgPzlAZg0AmeEAGTUAZIQDZMAAkH4OkC4DQDo5QFoMAHnGAdJABKyDT/tETpgj4D4RsM0RACAPQJLIqeIIuUUEJMQggqo4w6NVypBxMdATIqSEIeMu4X/CdLEutMU8eTck/wdE7yYYtcYMsiz5h4neVU6QeWaQr5J/M9H7jRNkghlkUvJvJ3rHOUHea34Lvyb8hjlB3mQB0uPDv4/w6+YEacsCZNCH/wfCr5UTpDELkI8+/McIvyecII+YJ/tzyX+a6H3ICXKHGaRJ8v9B9JZzgtwAcKoI+i311ngAqZfOWVH0nQHIB7P2FGF/pL5KDyDOitqtmKJvFxq0rgj7m2YlOwfgOE3vsTgmLzR3rmC/c6lFRVhSsToNAYgAWBAVEZ+lk2p1vQgN+kw8KjcD+BYSvp+gQVEi8JXPfUmJOFflG9XAgd4ME9h5xJbEuqmM8AmJlcIXxTxKueqdDpCXWbwn3FC3xVbV6+BTrnqhA4TaM6Qy7OsTPs9t1gFS53MwQapWB8i9HIBU6AChviZ1VSE0ybkrHQCmABxoGPgRgO8A3gKoxhWpAMBjAEPEos9LxcXfBs7vu0UwQF7vVk6uepC79VS8mTdERcVnzjErKyur/1zni6RsTvF5fPgAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-10">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_89)"/>
                    <defs>
                        <pattern id="pattern0_11_89" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_89" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_89" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nO2YO0wUURSGP40UFq6RxhgKE0OCQKuFhVYK2NAQekIELXx0UhCVWBm1ADpxS3mEjsZHtlB7IioojTQUGkLho6CQ6CWTHJPdMdy5O/ee3VvMl5xmd/ae+Wcy+825UFBQUAD0AluAaXJtybnk5m0EIYzUa58gryIIYKRe+AQpRxDASM34BJmIIICRuusT5EoEAYzUsE+QvggCGKkenyDdEQQwUp0+QY5mLP4YGAxUDzJ6lfDkp2XxEcIxZOnzI0SDT5YG44TjtqXPaogGNilOEo5HWjJ0keJc6tjLwJOc9dnS52mIIDYpVlLHXotRhi5S/EAtAzHK8B+9lgZfqeW8UpBLBMAmxV3gQNWxbR7PyF9Ln64QQbKk2BqgRymjxxECYZPi6QDrt2vL0EWKF/DnnLYMXaT4MMd7Vfrh7bes/5KAlJXn7xGtyVB7UlxIrT+uLUOtSXGaWia1ZegixSXgWFXddwiSvsqzWpNhPVJ8k+PuXU39pqI1GdYjxeSvuZoW4AxwHXgGfAE2gXngJnBWjqnmveZk6CrFbfz5ts/a31FgPyn+AQ55rJu8q/1uhAxdpFiRWeQE7hwHRkV4DZFhPVJM7s6yeKeD/zkJ3JLguw7rzaBAHimuyF/tHeBdjt/f0wjSjO3TYY0gNimamCfDNF1NCNKJAgeBtQaG+Jgao4OSjJw3ZMNsR+Hkd4Dn0iPYeJvFYeCibD4ve5z8hmw+JANXw07exikR3CLwK+OqJx4ZC7U7on23+mTuWJft0Cn5LPmuoKCggFzsAYXgreXx4AYzAAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-11">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_90)"/>
                    <defs>
                        <pattern id="pattern0_11_90" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_90" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_90" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEoElEQVR4nO2ZCahVVRSGv5zSMpu0kbABIp42CFGJgQ2GUYT0GjAskQbCBi19lWEDghViKlKSWZRmCBGRRmGvKKUBIiqbs8GyKGig0VfPBt+LBf+GzeGcvfc551JHeD8suHfdtfbe/93D+vc50IedF8OAM4FLgdnAZcAEYCTQr2KbY4FlwEbgA+BjfTbfucDgVhI4AlgFdAO9BfYNsBQ4KpN7DHADsER2ncjvqt/tD5gMfFXQ7vfAfGBEXRIzgb8CBHx7XrNmOBF4KRC7DVgOHKn4ocDDgfjfgBnALlVIXJ9IwGyTBuPI/52YZ3/S3d4MXQnsCMQ/AgwoQ+IE4J/EwWwH2pR3bQnyvr0FHKo2rorEzitDpLPEIG6vQD7PbJ84MssDcTbbh6eQ2LvEgLqAfZS3qQYJZ+8BuwFDgA/rzsoFJTq208xwWgtIOLPTzzAG+LMgZl0KkSUlOr1QOYtbSKRHf4zhloIYm/0onizR6UHKeaOFRHqBrcAeKojfFSzBKJ5L7OxbxQ+rucmL7MbAbNthFMW6xI42KP54ff8CWACcp+ptdejLEgN/GpgEHADs56mE83NirfZEEaqwvj2g+InAJQV6ywa1JWFPmH4rwkk5OdNSiNyaSOTOnFyrA1eoug+X7+xIO6sVt5fE4rvazDYOJyyzOcelEJmcSGSOlzNU8qFHtl0qFumjTwLtmIo23CWNNkn+9+U/KxP/M9A/hUhbIpGbvc3+pue3I3MgcC9wtGLuCbQzVTG2VNfrxDL/i/JfXKWGILZdCURcdZ2do2wfA37RhjdcHmjHLSE7pfL24E0Z/3RK4NUEIisUOy0QY2seXciKYp5QzKiM35YaWrL+weBqVxJSKrUbQHsgxsSf4fRAzB/Sd4aXPf8a+VZ6vtfKkIgNLquzpgdiFinGbeAiM/lv8PfDs/It8nwdZYmM0DSGOndFaX4gxnU8M9LWO4obDPwo3+vy3ebJd6tLpfFRpHO3SR8MxJyimFUJM2z1whetb+t7h76vpSKWJs7IwoLfu3SvMHyeQMQVxjatBjtwfAU8viqR8ZGOTVyG1r8dGIaTE0j0qojuq5z1Oq1QPXqFGuhfIKGddavjAQV66jC1szqRiJmrEeO8A6BT1b0WVkQ6nqu4CZnD4VP5h6hAphLZCgxS7kDpL1PFtTEx0nG3J0OmqCb494VskUuxxZ6SnqI2amOQRFqo483AgYofqYHcoe9jK166OpRf6YFc1eVl9jVwakH+sSUe2PUCP+maa0vrGeB+2Vpt+lJay8eYhM63eUssDxtKEHlUOdfk/GbSfn9q4KlAxz2SNA799LD6d+CcCifXXOW84Pl2qA13PFfGIcAPETk/WpctXxGYfI/dR4quse3ALOAi4GBaiHE5G3+hNuRDBYOyVwroWpxK5Az+A4zWMuvUlRivXszQctginbRMMxkTllkbRYMxrwSRPWkwnBSPWRcNx5xEIptpOGYlEtlIw3F1IpHHaTimJhJZQMOR9/w2z9ppOOyt7a8REvbQwb0ZbjTui+g19wy48bB3Hp8VvDAyPbVTYbieiqzRHcMeyO3+fw+qD32gGP8CqDERmnfIbdcAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-12">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_91)"/>
                    <defs>
                        <pattern id="pattern0_11_91" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_91" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_91" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuElEQVR4nO3YTahVVRjG8Z8fV7pIQkqYRn6UpAmB4icidEEogqRBemlgNhAdSTlQQUNRRzrUBomapkigIGkgF6ISihDDD9LUQBAnamF4UXQgmsqC98J2s885d3P1do7sP6zBWXvt/axnr7Xe992HioqKioqKiqZgODbgJS3OFDzCDSzyHBhJ7V/PiZFuLUxlpNmoVqQeA7AYP2KB3jEG+7ADr5TQ+AkLe7kiY8pozMDxzENT+xlv1xjfjvW4mxl/C6swpITGhTpG2stojMBWPMgJ9LT/4m28nLlnPi7XGJ/aJXxQQqPIyPySGq4WDPqzoO98jF/WYDLZtrCkRncdjWuRMGtpPNH5Bzqi/338VSCyoYSRFU9B4x62RC2WVnYb7hdoPCEyLrftpjwDI2U1vsFknMNJjMfhuJYMvdsqRvbg08zvD/FdUSDqbyMTcxozG2jsx1j8ECsxCqNzz/hfjFyPwzw48sk/DTQe4iBeK5p8kZG/8WLu2kjczIl0RkhuZCLt3/finnMF17sL+n6to3EbK+vkKHfwZXypFZHM7IrwVy+xZdux3P4tSmyPGiS52ThdMPYi5hRNNIn0hvYapca1jMiVTFyfEFuiC9MzpcaB3LbZU6fsGITludW7UMtIX0nbcSPWhtlhEfd/wSy8ie+xOzPhd/B1HPTeMDLyx2do0w+kMHkKn8SKZUnn5QRWx5ueGjmh6ZiGoxiKgZna7I1YmWHxNr+Kw/xR5ISmoyO2VOJ1HMIXYS4Fk7N4C0uxJLZhCsEtYeTbqHpTlTovSo0eI01LR4GRiTHpnhVZ0qpGfouzkCqEzdjUCkbmYmfOyKtYh+34PM7Fqsg/TcuQ+KbuisiUzkaWVOjtxZFW+Z93Ej6Ow50m/ALW4Pfst0Mr0Ykz8THUbxn5WdFWoparqKioqKio0EceA0M3ktypBRz0AAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-13">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_92)"/>
                    <defs>
                        <pattern id="pattern0_11_92" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_92" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_92" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIUlEQVR4nO2YTYhNYRjHf9c1RilMimsMjexsKAtszE5KiGxm7XPB1pRQFoMFRY2arFhZkEmEEqGMRhSKBWZofDSaxndmwczoqf/VO+eec895771zZzTnV6dpzn2e//l6nud9nhdSUlJSUlJSJg9Tgc3AKeAR8B0YAb4AXUA7sAHIMkGpAfYCb3TjccdbYCeQidBrBn4CF4CGCt1jA3BRuqZfwCKg07nJJ8ABYCUwH5gG1AOrgIPAU8f2NrAg4sKnZfMKqCvzIeqkMyLdApYDA84FLazisK+wBXgtvx5gcYhdLfBQNpeLfL04MvIfkZ7pjqIR+CiDa8As/DD7606ozQmxaXReVAul0SL/AemNwpL1sfMQ2TKKww3pdETYrAeGgd9Ak6d+k/yGpVPADiecfL9EkNlAt/SiQvOIfrcIyCXUzTkRY/6hFaov5sK+bJWelewwsioM+QIRFwHZJPZrnepUagIGMZ1n0rXqFveGW2P0WpN8wTMyshJbSQ5J93A5MY9HTnXpgrZOVJLV0r1XRhVq9KlyH2SYNOmSUi9d6w7iwvBSyLpQ4yzMV5KE/R8ZV7pfykr3V8KV2hZSd6XOdwI9STuBfHsxFvhorwAGZX9Wfwd1vuIX88VXe3egGd1VysXG8kjKDKBfPv36/798kHMBv/OlPMh4kw+rH8Am4JtveOUTrKAdriJuojfrXLNvwufXEav744FbetsCv7X5lOC7Ml5H9Ykbkmp9hrGjMjxG9dlXbEgKaVPMPrYnelfl3ZA1CRrGsMbR/CJ5rofZTmVYopDtjigi8zxa+LBW3vyLDkJ9xYw8JsSXRUqn71Dl7XdTRneA6ZSGbRVdlU6nOtiShqRyhrG5yhMzuqU368NMZxflU8RGnMX6UIkbD8FhbKhYbi0F3utmeoGNCeaAjGb9XvmZ/7Ix2gpKtCWUx36477QuNnvv1+ydU7jkVO3s/AvH9gGwMETTXQ86KrA3kJFO1PrzD0ukPc5bjjusO9gGTInQa1O4HS8j/4KYzgnpBjuCAmoUXie1gWdV7SvwWcncrl2YCbsbn5KSkpKSMqn4C7OqTrF1asWzAAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-14">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_93)"/>
                    <defs>
                        <pattern id="pattern0_11_93" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_93" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_93" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENklEQVR4nO2ZeYhVZRiHn3unsdSyUaNsnRZTs5TMwmmzRRtKJ1qMiixrKpuinWzPmooW09SCJoIQImiPSKKFpBLao432bWyvse2P/uiPouKF58LlcL333HtnuRfuAwMzZ/nOd873vr/3934DDRo0aDCAHA68CvwJrAbGUYdcDvwLrAG2ARYCnwFbUEfMB/4DfgHG5B0/B3geyFAHTAb6gN+Bs4ERifNPAWdS42wEvAs8ALwHNAG3Ja4ZD/wMjKaGuQx4BngJOA44CDi6wHV3Ad3UKLuYEycDX7kaK4FsgWvHAd8DLdQYkbwvAhcBjwLnAdOAE4vccztwLTVGF/AKsD2wHhgJbFzinlavHUWNsLsTmgRcbzgNBxYUuafZkHsYuJgaYCKwDjjJyf0A7AZ0lLhvO+BcoM0iOWR1JSa9yOQ+zWPHAy8owbekGGOpL/AWMIshYCbwiYUtakKOtUruMcC+KcbpcKwuBWJQiUr9Y4HQ2UM5jdVYlnKsLHCTyf4HsDWDxBlAL7BTgXM9SmnkR2eZBXRLYBVwNYNAu/kQPipJfNHf/KI3FPBWxdgWuADYH/iUAWS4lTpM4LwNXBMTeQjYFFhcwTOWmvRfAvvQz+ylH/oVeNql71Uuk+r1tRPoSiR/Ws4yx3I1qGpGay3ecdKLrdQ5jtK1XpHnnzrtL5pSSu6GntsNTHD8EIyKmA7cY//wCHCkEyvEVsBz1oswid8A+xl+MU6l9Phx3gSOKOfGqKzX6FKjbzg/0ckVo0mF+gu4D9gEWEL1HeVM4ELHTM3H2okZeQNtXuaDPzTBrwJ2pDpGGpo7GBnDypG9Z4HX9UstDhSNUCnmqmJx32zgFPqHO/LCa045N2bcDFhvaGW0GN1FvsgCV3K6SnNdmZONsDxQfxbebOe8c2FtDgCuVCXLZry9xBqXtlXpnZqQ2TtN7rDtU5TLQt1fIbLK883AYb7AFN3CrX7QUY450QIbzyybJmU1QuZU/851d3vqUMMkjgUOdQXTEqu73I4x9rQuVSXj2LE2YLu6SbHWl/7IsK2YqarYE9qRlVqThYZehMWKCip3q2ETYXmv20GXGAV9eq5wEXtbR240Z6pimCHwj5ts4Xbvz/tCnRbONMzQDbSZi+HZkkSoPgZ8ARzssWkW5X5hhFV3svb9A5c+tj8PSfEyE/yJIvpdCiVq97oeV6fXPOp3MhbCb32Z00s0UIsMk8dd4TSM9fq3De+oUQNG9A0vm5SlTN4JFs5SOypJYrX/Bl5jAMlaSOf7b4OwFvmEZcltwv1UhTVv11lXbCLT0KFLTu7ttiirwZOqT02TsUefpN1vziuaLVbnN8rxTEPJ3arZXBVpheZxng5g0DYTqiWK2oNKdBS5zQy5Pt1A3dAGvO/vzUrzOtvkumKM+1HRc39uckfxqzuy2pfVGskGDRo0aECS/wHEQ8wHAj80+AAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-15">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_95)"/>
                    <defs>
                        <pattern id="pattern0_11_95" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_95" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_95" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACa0lEQVR4nO2ZPWgUQRiGHzxiULSIeCgIFhaSSoSgKUTFEAVBolHERoOVjUVAI/4g1mkCUVIoFgELUROMhhSCiI1gYWHQFDYBI1qIZ1BBRBN/+PBbGIa9u9lz73b2nAfeYt+9mf3eu527b+cgEAgEAn9pBSaBh6r76uWOIvDbkni5o9gsQVbHBBEvlxwDTqiOZl1M07EVOGtoi/prLf+Q+kuAfsPvVy9zRqz7XY6Fw5Y/4/tiH8kgSIEmCNIHvAA2px1kP3DHkBwLG4Fbhn9e/RZg1PBH1XNhGfBWw38BtpNT+qxP8j2wJukk8g53q3YZ/VHR8LuN26RVXxf5Mj6i0/A7Ha4RMR5zW94gIdPWBL3qX7Z8OUbPm76MF9piimmrco2IVzFjvxvjnZixJpDFnPZiL3eNiHcxY0VDwDlgEBjQdboSj4NMlwkSp8/Ambgg94B5VQnYpv6A4c/rMXq+ZPgyXlgOzBn+nHqVrhFxJUEQ0RM8pR1YdAzxE9iJR8g3V7t2zBOOQX4Bp6IJuoDZhB+lD3oNHDTfibyEeAaMAcPAvrjn/x8eFFlNJW1bKvLRg0KradBlkb30oNBK+gascwky4UGxlTSMI5c8KLacPumjtBN7PCi4nE6SAGkbvnpQtK2ntWxW3PWgcFMfgPXUwF4Pio8krclu/oHnHoRYSGNHskubsKxCyBPgAVLiekYh3gA7SJGlwIMGh5CtolXUgRU6eb0DSGvUQwM4XocWX9bgI32OaOiGdkE3Bm5qK11L8fJj+xg4DWzAAwrAJg12EbgG3Aam9M/OKb0lrwIXgCNAR4Jt0kAgEPiP+AM3FGOMbw4EMgAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-16">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_102)"/>
                    <defs>
                        <pattern id="pattern0_11_102" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_102" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_102" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEq0lEQVR4nO2aa6hVRRTHf+q9amgP7WEFZccIepglREFppT2JLIroalFXP/QgoqggqexDRVTUt0C7GHQjKigorwlGUFGQhReSXpC9zBSCLj2uQXqPenas+G8ZptmPOXufg4V/WJxzZs1eM/89M2vNrDlwAP9vXA08A6wHNgN/AGcF6i0GFgGH5dhqAAPANqCpz+dU3nFsABJPzg/U+0y6PcDbQB8w2dFfBvwZsGWyA7i0rg5bo9MD5UuBp4Gbgbk5b/xh4ENgTJ3bC5wkXSOHhEtmZlUSlwPfAqurGgKmAXcATzplAwUkUlnVbqOTvEY+BXqpH9tKEtnajvEJwEcy8BdwD9BDZzBWksiudhuw+f8dcGZOnRnAMmAQGAZG1LExfR+WbqnqhvBTSSI/UgE2vUKYD6wFdpfsRKK6Q8A8z9ZAyedXUiNmAesiOp8lbznxoSGvlFd/FDi+bCdD/t/FkhINxojZskCJ4sSOHBKXlCVxEdACXsrQr6iRgCst2UZxYpW805g+V8aMxEHA9zK8vIskXEnJVMJdMrYp4GKXVOzgGuACYIrkQjmJ0Mj0ZfRvYoHn3OeVtsuYber8hV1lTYRGN8WDGWum4dU7RlNse1Ew7tGbeB4Y5+nWVRyJIpjn8p+z0XJhffpcOpsd0ZhfcUrZdCrCgoxnz/Pq3aJyOypEIzSPY2RqiTYOznjWgqaLwxVMbYtySAyJGZERu24iTeAor+7rElu3pbGsIolE3qkIC3Oe74/p8CvAu8BpXvlgDUT8RRtCnjN5IYbIZj10ilc+XAORRC42C0VBdmNGqDg2ZOx3PeQfT0dqIpLIxS7Qmpmq6VTGrf/i9Wm6yn8NEWlK2VvyoJMi6YLsCkT3RH37F/ZI2dMlIpYqegq4HrgVeC+CyKSM8n9wLjAnENFH2iAS0rlltv2Y7bVj7b5acmodrfKficBwB4i8qO+nAi8D9+n37JKLfaaOxF/GEBnsAJFUbF2+A9wkXW+k+7WkSOWAWIVIS+vDths+kqoBMYWdE8psUWKINL2yJ5zfJwMP5NhrAkfGELBheh/YGXhTQ5FE0mzLqH6/5tVPd8Or9fvrHHtraANpcLrdK5+XQ8RH4qR4zgau8WKT6e/Ud3vTJ3ieMvHEvKmLhUo+jM8jcqOTDh1XcPDJI7JJLjK0KE3/m5elcbfjSc4W3vr0hXQWf0odda/0dGXyTa7YludNxYatGXW2aFqlwThxZFSj5eIK6QqPuoa7lRq1lJCPxfI4SYelFXjj1vGvpL+3iEQ6KraXyUI30kEPBdq9SrpvCvoXhRUdGplWBokU1wEXUzP6ak6Z2prIXcBVcaJOj4cGdI0aEhOpd/IXdq0wd/exs3EL3RuilM2Qc6YpI00FOz9OpLCEw/2BMNA2jtOdoTX+gy45yWm8X5u80EXPRun6C7Ydc+Sai47I0bCz8ScybCPUKUxQanWn2tqQc7PVNswtPxs4ENWJM3RV3dKfA9y7967AvM0RNdl6NOYip07M1TTYrXP3Y8qU+LC3ezpwLfAI8AFwA/sRztGu2U1S2B7Lx20Bz/UG+yGm6U81j+tU6WORNohrdTos+lPNAfBfxt9pNKxwKTtQlwAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>
            </div>
            <div className="icon icon-17">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_11_103)"/>
                    <defs>
                        <pattern id="pattern0_11_103" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_11_103" transform="scale(0.02)"/>
                        </pattern>
                        <image id="image0_11_103" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACH0lEQVR4nO3aT0sbQRjH8a8YiwrRHoq1f3xTkoOeijWtfQ0F8VwS/7wALR7al5C0UEGsYqElBMGKUOlFjEK0GCt6c2ThEUrcdTObTZ9Z2R88xw3zyczuzs4MpLm/6QNywAKwCfwG/gBXwDGwC3wE8kAWB/MAmAHqgGmxGsA0kMGRDAHfLQDNte5C72RkCJk26zPQpQmZjAFxU2OakK9NjSkBz6XKlpAvmpCzpsZ4gJuMWEJOFB2YGCFeqaW5IWUBePUpyRDTZqWQtEcsozq0eoA3MoVodOB+CIKYgGrIe2vKZn72BKj+p8a3CjH/VAUYDkP0AzsKCBuIAbblsyEws0oIW4gBCkGIh8B5giB/gUE/SF4REQVigJd+kOUEQpb8IFuKiJoME2NZ3tP1VmqKkIIsXBjLOvCDXCr1RBF4CvyKcP1FnJB9+TejLCIMyLVRECYIUouIeAbMA4cKPXoQ182eE4RRqqof5H2EH8oq9YSRWoxreQdFhAEm/CBZn5URlyFn8rDwTTFBkHeETON/JgCyHTaNRz5aKg5DfgCPaTHe5+RrYA04dQByKm15BXTTodgMQ6djYi61pBAS3iOlkH2UxEDCth/UchIjpKHHgBVLyF37KKuakPEYn1wvNCFdspnZLsJbpO7YW7vVeNPpjTYQ34BHOJIeOZZhsw1xBLyVa51LVpZfP8hBmrocrPEO2OzJnsscMAr0ajc2DR3KNd642oFqa6WvAAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </div>
        </div>
     );
}
 
export default Marquee;