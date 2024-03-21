import React from 'react';

const Contact = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginLeft: '10%' }}>
                <br />   <br />   <br />
                <h2>Opening Hours</h2>
                <br />   <br />
                <p>Monday - Friday: 8 am - 10 pm</p>
                <p>Saturday: 9 am - 9 pm</p>
                <p>Sunday: 10 am - 6 pm</p>
                <p> Holidays: 10 am - 1 pm </p>
                <br />   <br />   <br />
            </div>
            
            <form id="comp-ki5tkljt" class="JVi7i2 comp-ki5tkljt wixui-form">
                <div data-mesh-id="comp-ki5tkljtinlineContent" data-testid="inline-content" class="">
                    <div data-mesh-id="comp-ki5tkljtinlineContent-gridContainer" data-testid="mesh-container-content">
                        <div id="comp-ki5tklkc1" class="MpKiNN comp-ki5tklkc1 wixui-text-input qzvPmW">
                            <label for="input_comp-ki5tklkc1" class="wPeA6j wixui-text-input__label">First Name</label>
                                <div class="pUnTVX">
                                    <input name="first-name" id="input_comp-ki5tklkc1" class="KvoMHf has-custom-focus wixui-text-input__input" type="text" placeholder="" aria-required="false" maxlength="100" autocomplete="off" value="" />
                                </div>
                            </div>
                        <div id="comp-ki5tklkl2" class="MpKiNN comp-ki5tklkl2 wixui-text-input qzvPmW">
                            <label for="input_comp-ki5tklkl2" class="wPeA6j wixui-text-input__label">Last Name</label>
                            <div class="pUnTVX">
                                <input name="last-name" id="input_comp-ki5tklkl2" class="KvoMHf has-custom-focus wixui-text-input__input" type="text" placeholder="" aria-required="false" maxlength="100" autocomplete="off" value="">
                            </div>  
                        </div>
                        <div id="comp-ki5tklko" class="MpKiNN comp-ki5tklko wixui-text-input qzvPmW lPl_oN">
                            <label for="input_comp-ki5tklko" class="wPeA6j wixui-text-input__label">Email</label>
                            <div class="pUnTVX">
                                <input name="email" id="input_comp-ki5tklko" class="KvoMHf has-custom-focus wixui-text-input__input" type="email" placeholder="" required="" aria-required="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxlength="250" autocomplete="off" value="">
                            </div>
                        </div>
                        <div id="comp-ki5tklkq" class="MpKiNN comp-ki5tklkq wixui-text-input qzvPmW">
                            <label for="input_comp-ki5tklkq" class="wPeA6j wixui-text-input__label">Subject</label>
                            <div class="pUnTVX">
                                <input name="subject" id="input_comp-ki5tklkq" class="KvoMHf has-custom-focus wixui-text-input__input" type="text" placeholder="" aria-required="false" maxlength="50" autocomplete="off" value="">
                            </div>
                        </div>
                        <div id="comp-ki5tklks" class="snt4Te comp-ki5tklks wixui-text-box oKe0Po">
                            <label for="textarea_comp-ki5tklks" class="PSkPrR wixui-text-box__label">Message</label>
                            <textarea id="textarea_comp-ki5tklks" class="rEindN has-custom-focus wixui-text-box__input" placeholder="" aria-required="false"></textarea>
                        </div>
                        <div class="comp-ki5tklkx2 FubTgk" id="comp-ki5tklkx2" aria-disabled="false">
                            <button aria-disabled="false" data-testid="buttonElement" class="uDW_Qe wixui-button PlZyDq">
                                <span class="l7_2fn wixui-button__label">Submit</span>
                            </button>
                        </div>
                        <div id="comp-ki5tkll11" class="SxM0TO QxJLC3 comp-ki5tkll11 wixui-rich-text" data-testid="richTextElement">
                            <p class="font_8 wixui-rich-text__text" style="font-size:17px;">Thanks for submitting!</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        {/*

            <div style={{ flex: 1 }}>
                <h2>Address</h2>
                <p>123 Main Street</p>
                <p>City, State, ZIP</p>
                <a href="https://www.google.com/maps/place/123+Main+Street" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <div style={{ flex: 1 }}>
                {/* Newsletter content here */}
            
         
        
    );
}

export default Contact;
