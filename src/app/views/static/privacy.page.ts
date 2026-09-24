import { Component } from '@angular/core';
import { Page } from '../../core/page';

@Component({
  selector: 'privacy-page',
  template: `
    <h1>Privacy Policy</h1>
    <p><b>Effective date:</b> 07 Sept 2026</p>
    <p>Aytacworld ("we," "us," or "our") operates aytacworld.com and provides
    IT consultancy and software development. This privacy Policy explains how
    we collect, use, disclose, and protect personal information.</p>

    <h2>Information We Collect</h2>
    <p>We may collect the following information:</p>
    <ul>
      <li><b>Information you provide:</b> such as your name, email address,
        phone number, billing details, account credentials, and messages you
        send to us.
      </li>
      <li><b>Transaction information:</b> such as purchases, subscriptions,
        orders, and payment-related details. Payments may be processed by
        third-party payment providers.
      </li>
      <li><b>Automatically collected information:</b> such as your IP address,
        browser type, device information, operating system, page viewed, and
        dates and times of visits.
      </li>
      <li><b>Information from third parties:</b> such as information from
        social-media platforms, business partners, advertising providers, or
        publicly available sources.
      </li>
    </ul>

    <h2>How We Use Personal Information</h2>
    <p>We may use personal information to:</p>
    <ul>
      <li>Provide, operate, and maintain our services</li>
      <li>Create and manage user accounts</li>
      <li>Process payments and fullfill orders</li>
      <li>Respond to questions and provide customer support</li>
      <li>Send service-related notices</li>
      <li>Send marketing communications where permitted</li>
      <li>Personalize and improve our website and services</li>
      <li>Analyze usage and measure performance</li>
      <li>Detect, prevent, and investigate fraud, abuse, or security incidents
      </li>
      <li>Comply with legal obligations and enforce our agreements</li>
    </ul>

    <h2>How We Share Personal Information</h2>
    <p>We may share personal information with:</p>
    <ul>
      <li>Service providers that help us operate our business</li>
      <li>Payment processors and financial institutions</li>
      <li>Hosting, analytics, communications, and customer-support providers
      </li>
      <li>Advertising or marketing partners, where permitted</li>
      <li>Professional advisers such as lawyers, accountants, and insurers</li>
      <li>Government authorities when required by law</li>
      <li>A buyer or successor in connection with a merger, acquisition,
        financing, or sale of company assets
      </li>
    </ul>
    <p>We do not sell/rent personal information.</p>

    <h2>Data Retention</h2>
    <p>We retain personal information for as long as reasonably necessary to
      provide our services, fulfill the purposes described in this policy,
      comply with legal and accounting requirements, resolve disputes, and
      enforce our agreements.
    </p>

    <h2>Data Security</h2>
    <p>We use reasonable administrative, technical, and organizational
      safeguards designed to protect personal information. However, no method
      of transmission or storage is completely secure.
    </p>

    <h2>Your Privacy Rights</h2>
    <p>Depending on where you live, you may have the right to:</p>
    <ul>
      <li>Request access to personal information we hold about you</li>
      <li>Request correction or deletion of your information</li>
      <li>Object to or restrict certain processing</li>
      <li>Withdraw consent where processing is based on consent</li>
      <li>Opt out of marketing communications</li>
      <li>Opt out of targeted advertising or certain data sharing</li>
      <li>Receive a copy of certain information in a portable format</li>
      <li>Appeal a decision regarding a privacy request</li>
    </ul>
    <p>To submit a request, contact us at <a href="mailto:info@aytacworld.com">
      info@aytacworld.com</a>. We may need to verify your identity before
      completing a request. You may also authorize someone to submit a
      request on your behalf where permitted by law.
    </p>
    <p>You can unsubscribe from marketing emails by clicking the “unsubscribe”
      link in the email. Even if you opt out of marketing, we may still send
      essential service or transaction-related messages.
    </p>
  `,
})
export class PrivacyPage extends Page {}
