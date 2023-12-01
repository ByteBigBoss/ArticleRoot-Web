import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (

    <main className="flex min-h-screen flex-col items-center bg-slate-50 overflow-x-hidden pb-[60px]">

      <div className='pt-6 w-full bg-black flex justify-center pb-[20px]'>
        <div className='frame-container'>
          <NavBar />
        </div>
      </div>

      <section className='w-full flex flex-col items-center font-fmaily-Roboto'>
        <div className='frame-container'>

          <div className='mt-[60px] w-full flex flex-col gap-[24px]'>

            <div>
              <div className='font-medium text-[32px]'>Privacy Policy</div>
              <div className='text-[16px] font-normal pt-[24px] leading-[28px]'>This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. Here at website https://www.articleroot.com, we take personal privacy very seriously. Our content is original or re-written under certain policies. Moreover, all the re-written articles are published with the specific source and original articles are written by our writers under our website policy. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</div>

              {/* Q1 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>What personal information do we collect from the people that visit our website?</div>
                <div className='text-[16px] pt-[12px] leading-[28px]'>This page informs you of our policies regarding the collection, use and disclosure of personal information we receive from users of the site. Generally, we do not require any personal detail, we use your presence only for improving the site. <br /><br />Like many site operators, we collect information that your browser sends whenever you visit our website. This log data may include such as your computer’s Internet Protocol (IP) address, browser type, browser version, the page of our website that you visit, the time and date of your visit, the time you spend on those pages and other statistics.</div>
              </div>

              {/* Q2 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>When and why do we collect information?</div>
                <div>Your basic information are collected when you subscribe to a newsletter or enter information on advertisements on our site. Furthermore, we allow third parties, including carefully selected ad networks and business partners such as Adsense, Revcontent , Audience Network, etc. to display advertising on our website. As above mentioned our Partners may, for instance, collect, use and share your information to make or help us make predictions about your interests, and may provide you with offers, promotional materials, and advertisements.</div>
              </div>

              {/* Q3 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>How do we use your information?</div>
                <div>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</div>
                <div>• To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</div>
                <div>• To improve our website in order to better serve you.</div>
                <div>• To send periodic emails regarding new content and offers that may interest you.</div>
              </div>

              {/* Q4 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>How do we protect your information?</div>
                <div>We only provide articles and information and use regular Malware Scanning. Also, we do not use vulnerability scanning and/or scanning to PCI standards or ask for credit card numbers. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information. All transactions are processed through a gateway provider and are not stored or processed on our servers. Especially, we do not specifically market to children under the age of 13 years old.</div>
              </div>

              {/* Q5 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>How we use ‘cookies’?</div>
                <div>As a general rule https://www.articleroot.com we do not share personal information with third parties nor do we do store information we collect about your visit to the site for use other than to analyze content performance through the use of cookies. As an example, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction in order to provide better performances in the future. In case if you do not prefer to see cookies, you can turn off at any time by modifying your internet browser settings. Moreover as a result, if you turn cookies off it will turn off some of the features of the site.</div>
              </div>

              {/* Q6 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>Advertising</div>
                <div>We use Google AdSense, Revcontent and Audience Network advertising on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google’s use of the DART cookie enables it to serve ads to our users based on previous visits to our website and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
                  If you do not want Revcontent to use the information it collects for purposes of showing ads that are targeted to your interests, you may opt-out by clicking the below “Opt-Out” button</div>
                <div>If you use multiple devices and/or multiple browsers, you must opt out on each device/browser (even if you log in to Revcontent using social media credentials).</div>
              </div>

              {/* Q7 */}
              <div className='pt-[30px]'>
                <div>We link it on our home page as our Privacy Policy link includes the word ‘Privacy’ and can easily be found on the page specified above. This privacy policy is subject to change without notice.</div>
                <div>If there are any questions regarding this privacy policy, you may contact our editor at articleroot@gmail.com</div>
                <div>We collect your email address in order to Send information, respond to inquiries, and/or other requests or questions.</div>
              </div>

              {/* Q8 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>We agree to the following:</div>
                <div>• Not use false or misleading subjects or email addresses.</div>
                <div>• Identify the message as an advertisement in some reasonable way.</div>
                <div>• Include the physical address of our business or site headquarters.</div>
                <div>• Monitor third-party email marketing services for compliance, if one is used.</div>
                <div>• Honor opt-out/unsubscribe requests quickly.</div>
                <div>• Allow users to unsubscribe by using the link at the bottom of each email.</div>
                <div>If at any time you would like to unsubscribe from receiving future emails, you can email us at articleroot@gmail.com and we will promptly remove you from ALL correspondence.</div>
              </div>

              {/* Q9 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>Contact Us:</div>
                <div>Do not hesitate to contact us using the information below if there are any questions regarding this privacy policy.</div>
              </div>


              {/* Q10 */}
              <div className='pt-[30px]'>
                <div className='text-[24px] font-medium'>Address:</div>
                <div>ImaginecoreX (Pvt) Ltd</div>
                <div>No. 132/A Mederikanaththa,</div>
                <div>Ehalape, Maliduwa</div>
                <div>Akuressa, Southern Province, 81400</div>
                <div>Sri Lanka</div>

                <div>articleroot@gmail.com</div>
                <div>Last Edited on 14-Nov-2023</div>
              </div>

            </div>
          </div>

        </div>
      </section>


    </main>

  )
}

export default page