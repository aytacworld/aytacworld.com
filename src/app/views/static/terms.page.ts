import { Component } from "@angular/core";
import { Page } from "../../core/page";

@Component({
  selector: 'terms-page',
  template: `
    <h1>Terms of Service</h1>
    <p><b>Effective date;</b> 07 Sept 2026</p>
    <p>These Terms of Service (“Terms”) govern your access to and use of
      Aytacworld’s website, applications, products, and services
      (collectively, the “Services”). By accessing or using the Services,
      you agree to these Terms. If you do not agree, do not use the Services.
    </p>

    <h2>1. Eligibility</h2>
    <p>You must be at least 18 years old, or the minimum age required
      in your location, to use the Services. If you use the Services on behalf
      of a company or organization, you represent that you have authority to
      accept these Terms on its behalf.
    </p>

    <h2>2. Accounts</h2>
    <p>Some features may require you to create an account. You agree to:</p>
    <ul>
      <li>Provide accurate and current information</li>
      <li>Keep your login credentials confidential</li>
      <li>Promptly update inaccurate account information</li>
      <li>Notify us of unauthorized account use</li>
      <li>Accept responsibility for activity under your account</li>
    </ul>
    <p>We may suspend or terminate accounts that contain inaccurate
      information or violate these Terms.
    </p>

    <h2>3. Using Our Services</h2>
    <p>You may use the Services only for lawful purposes and in accordance
      with these Terms.
    </p>
    <p>You must not:</p>
    <ul>
      <li>Violate applicable laws or regulations</li>
      <li>Infringe another person’s rights</li>
      <li>Use the Services to commit fraud or distribute malicious software
      </li>
      <li>Interfere with or disrupt the Services</li>
      <li>Attempt to gain unauthorized access</li>
      <li>Scrape, copy, or extract content or data without permission</li>
      <li>Reverse engineer or modify the Services, except where legally
        permitted
      </li>
      <li>Impersonate another person or organization</li>
      <li>Use automated systems in a way that places unreasonable demands on
        the Services
      </li>
      <li>Upload content that is unlawful, harmful, defamatory, threatening,
        or infringing
      </li>
    </ul>

    <h2>4. User Content</h2>
    <p>You may be able to submit, upload, post, or transmit content through
      the Services (“User Content”).
    </p>
    <p>You retain ownership of your User Content. However, by submitting it,
      you grant us a worldwide, non-exclusive, royalty-free license to host,
      store, reproduce, modify as necessary for technical purposes, display,
      and distribute it solely to operate, improve, and provide the Services.
    </p>
    <p>You represent that:</p>
    <ul>
      <li>You own or have permission to use your User Content</li>
      <li>Your User Content does not violate these Terms or applicable law</li>
      <li>Your User Content does not infringe another person’s rights</li>
    </ul>
    <p>We may remove User Content that we reasonably believe violates these
      Terms or creates risk for us, our users, or others.
    </p>

    <h2>5. Our Intellectual Property</h2>
    <p>The Services and their contents—including software, text, graphics,
      logos, designs, trademarks, and other materials—belong to Aytacworld or
      our licensors. Except for the limited right to use the Services under
      these Terms, we do not grant you ownership or other rights in our
      intellectual property.
    </p>
    <p>You may not use our trademarks, branding, or materials without our
      prior written permission.
    </p>

    <h2>6. Purchases and Payments</h2>
    <p>If you purchase products or services from us:</p>
    <ul>
      <li>You agree to provide accurate billing and payment information.</li>
      <li>Prices, taxes, and applicable fees will be shown at checkout.</li>
      <li>Payments may be processed by third-party payment providers.</li>
      <li>We may change prices, but changes will not affect completed
        purchases.
      </li>
      <li>Subscriptions renew automatically unless canceled before the renewal
        date, where permitted by law.
      </li>
      <li>You may cancel a subscription through account settings.</li>
      @if (false) {
        <li>Refunds are available according to our [Refund Policy link].</li>
      }
    </ul>

    <h2>7. Promotions and Services Provided by Others</h2>
    <p>The Services may include links to or integrations with third-party
      websites, products, or services. We do not control or endorse
      third-party services and are not responsible for their content,
      availability, or practices.
    </p>
    <p>Additional terms may apply to third-party services.</p>

    <h2>8. Disclaimers</h2>
    <p>To the maximum extent permitted by law, the Services are provided
      “as is” and “as available.” We do not guarantee that the Services will:
    </p>
    <ul>
      <li>Always be available or uninterrupted</li>
      <li>Be free from errors or security vulnerabilities</li>
      <li>Meet every user’s requirements</li>
      <li>Produce completely accurate or reliable results</li>
    </ul>
    <p>Nothing in these Terms excludes warranties or rights that cannot
      legally be excluded.
    </p>

    <h2>9. Limitation of Liability</h2>
    <p>To the maximum extent permitted by law, Aytacworld and its officers,
      employees, affiliates, and service providers will not be liable for
      indirect, incidental, special, consequential, exemplary, or punitive
      damages, or for lost profits, revenue, data, or business opportunities
      arising from or related to your use of the Services.
    </p>
    @if (false) {
      <p>Our total liability for claims related to the Services will not exceed
        the greater of:
      </p>
      <ul>
        <li>The amount you paid us during the twelve months before the event
          giving rise to the claim; or
        </li>
        <li>[Dollar amount], where permitted by law.</li>
      </ul>
      <p>Some jurisdictions do not allow certain limitations, so parts of
        this section may not apply to you.
      </p>
    }

    <h2>10. Indemnification</h2>
    <p>To the extent permitted by law, you agree to defend, indemnify, and
      hold harmless Aytacworld and its officers, employees, affiliates, and
      service providers from claims, liabilities, damages, losses, and
      expenses arising from:
    </p>
    <ul>
      <li>Your use or misuse of the Services</li>
      <li>Your violation of these Terms</li>
      <li>Your User Content</li>
      <li>Your violation of another person’s rights or applicable law</li>
    </ul>

    <h2>11. Suspension and Termination</h2>
    <p>You may stop using the Services at any time.</p>
    <p>We may suspend or terminate your access if we reasonably believe that
      you have violated these Terms, created risk for us or others, engaged in
      unlawful conduct, or used the Services improperly. We may also
      discontinue all or part of the Services at any time.
    </p>
    <p>Sections that by their nature should survive termination—including
      intellectual property, disclaimers, liability limitations,
      indemnification, and dispute provisions—will continue to apply.
    </p>

    <h2>12. Dispute Resolution</h2>
    <p>Before filing a legal claim, you agree to contact us at
      <a href="mailto:info@aytacworld.com">info@aytacworld.com</a> and give
      us 30 days to attempt to resolve the dispute informally.
    </p>
    <p>Any dispute arising from these Terms will be governed by the laws
      of Belgium, without regard to conflict-of-law rules. Legal proceedings
      must be brought in the courts located in Brussels, Belgium, unless
      applicable law requires otherwise.
    </p>

    <h2>13. Changes to These Terms</h2>
    <p>We may update these Terms from time to time. We will post the updated
      Terms on this page and change the “Effective date.” If changes are
      material, we will provide additional notice where required.
    </p>
    <p>Your continued use of the Services after the updated Terms take effect
      means that you accept the revised Terms.
    </p>

    <h2>14. General Terms</h2>
    <p>If any provision of these Terms is found to be invalid or
      unenforceable, the remaining provisions will remain in effect.
    </p>
    <p>Our failure to enforce a provision is not a waiver of our right to
      enforce it later.
    </p>
    <p>These Terms, together with any policies linked in them, represent the
      entire agreement between you and Aytacworld regarding the Services.
    </p>

    <h2>15. Contact Us</h2>
    <p>Questions about these Terms should be sent to:</p>
    <p>Aytacworld</p>
    <p>Arthur Maesstraat 100/307, 1130 Brussels, Belgium</p>
    <p>Email: <a href="mail:info@aytacworld.com">info@aytacworld.com</a></p>
  `,
})
export class TermsPage extends Page {}
