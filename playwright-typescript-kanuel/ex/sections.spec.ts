import { test, expect } from '@playwright/test';
import { API_KEY } from "../consts";

test('Football section should be a valid object', async ({ request }) => {
    const response = await request.get(`/football?api-key=${API_KEY}`);
    expect(response.ok()).toBeTruthy();
    const data: any = await response.json();
    const dataContent: any = data.response;
    expect(dataContent).toHaveProperty('status');
    expect(typeof dataContent.status).toBe('string');

    expect(dataContent).toHaveProperty('userTier');
    expect(typeof dataContent.userTier).toBe('string');

    expect(dataContent).toHaveProperty('total');
    expect(typeof dataContent.total).toBe('number');

    expect(dataContent).toHaveProperty('startIndex');
    expect(typeof dataContent.startIndex).toBe('number');

    expect(dataContent).toHaveProperty('pageSize');
    expect(typeof dataContent.pageSize).toBe('number');

    expect(dataContent).toHaveProperty('currentPage');
    expect(typeof dataContent.currentPage).toBe('number');

    expect(dataContent).toHaveProperty('pages');
    expect(typeof dataContent.pages).toBe('number');


    expect(dataContent).toHaveProperty('edition');
    expect(typeof dataContent.edition).toBe('object');
    expect(dataContent.edition).toHaveProperty('id');
    expect(typeof dataContent.edition.id).toBe('string');
    expect(dataContent.edition.id).toEqual('football');
    expect(dataContent.edition).toHaveProperty('webTitle');
    expect(typeof dataContent.edition.webTitle).toBe('string');
    expect(dataContent.edition).toHaveProperty('webUrl');
    expect(typeof dataContent.edition.webUrl).toBe('string');
    expect(dataContent.edition).toHaveProperty('apiUrl');
    expect(typeof dataContent.edition.apiUrl).toBe('string');
    expect(dataContent.edition).toHaveProperty('code');
    expect(typeof dataContent.edition.code).toBe('string');


    expect(dataContent).toHaveProperty('section');
    expect(typeof dataContent.section).toBe('object');
    expect(dataContent.section).toHaveProperty('id');
    expect(typeof dataContent.section.id).toBe('string');
    expect(dataContent.section).toHaveProperty('webTitle');
    expect(typeof dataContent.section.webTitle).toBe('string');
    expect(dataContent.section).toHaveProperty('webUrl');
    expect(typeof dataContent.section.webUrl).toBe('string');
    expect(dataContent.section).toHaveProperty('apiUrl');
    expect(typeof dataContent.section.apiUrl).toBe('string');

    expect(dataContent.section).toHaveProperty('editions');
    expect(dataContent.section.editions instanceof Array).toBeTruthy();
    dataContent.section.editions.forEach(function (items){
        expect(items).toHaveProperty('id');
        expect(typeof items.id).toBe('string');
        expect(items).toHaveProperty('webTitle');
        expect(typeof items.webTitle).toBe('string');
        expect(items).toHaveProperty('apiUrl');
        expect(typeof items.apiUrl).toBe('string');
        expect(items).toHaveProperty('code');
        expect(typeof items.code).toBe('string');
    });

    expect(dataContent).toHaveProperty('results');
    expect(dataContent.results instanceof Array).toBeTruthy();
    const results: any[] = dataContent.results;
    results.forEach(function (item){
        expect(item).toHaveProperty('id');
        expect(typeof item.id).toBe('string');

        expect(item).toHaveProperty('sectionId');
        expect(typeof item.sectionId).toBe('string');

        expect(item).toHaveProperty('sectionName');
        expect(typeof item.sectionName).toBe('string');

        expect(item).toHaveProperty('webTitle');
        expect(typeof item.webTitle).toBe('string');

        expect(item).toHaveProperty('webPublicationDate');
        expect(typeof item.webPublicationDate).toBe('string');

        expect(item).toHaveProperty('webTitle');
        expect(typeof item.webTitle).toBe('string');

        expect(item).toHaveProperty('webUrl');
        expect(typeof item.webUrl).toBe('string');

        expect(item).toHaveProperty('isHosted');
        expect(typeof item.isHosted).toBe('boolean');

        expect(item).toHaveProperty('apiUrl');
        expect(typeof item.apiUrl).toBe('string');

        expect(item).toHaveProperty('pillarId');
        expect(typeof item.pillarId).toBe('string');

        expect(item).toHaveProperty('pillarName');
        expect(typeof item.pillarName).toBe('string');
    });
});

test('Tags response should be a valid response', async ({ request }) => {
    const response = await request.get(`/tags?api-key=${API_KEY}`);
    expect(response.ok()).toBeTruthy();
    const data: any = await response.json();
    const dataContent: any = data.response;

    expect(dataContent).toHaveProperty('status');
    expect(typeof dataContent.status).toBe('string');

    expect(dataContent).toHaveProperty('userTier');
    expect(typeof dataContent.userTier).toBe('string');

    expect(dataContent).toHaveProperty('total');
    expect(typeof dataContent.total).toBe('number');

    expect(dataContent).toHaveProperty('startIndex');
    expect(typeof dataContent.startIndex).toBe('number');

    expect(dataContent).toHaveProperty('pageSize');
    expect(typeof dataContent.pageSize).toBe('number');

    expect(dataContent).toHaveProperty('currentPage');
    expect(typeof dataContent.currentPage).toBe('number');

    expect(dataContent).toHaveProperty('pages');
    expect(typeof dataContent.pages).toBe('number');

    expect(dataContent).toHaveProperty('results');
    expect(dataContent.results instanceof Array).toBeTruthy();

    const results: any[] = dataContent.results;
    results.forEach(function(item) {
        expect(item).toHaveProperty('id');
        expect(typeof item.id).toBe('string');

        expect(item).toHaveProperty('type');
        expect(typeof item.type).toBe('string');

        expect(item).toHaveProperty('webTitle');
        expect(typeof item.webTitle).toBe('string');

        expect(item).toHaveProperty('webUrl');
        expect(typeof item.webUrl).toBe('string');

        expect(item).toHaveProperty('apiUrl');
        expect(typeof item.apiUrl).toBe('string');

        if(item.activeSponsorships){
            item.activeSponsorships.forEach(function (activeSponsorship){
                expect(activeSponsorship).toHaveProperty('sponsorshipType');
                expect(typeof activeSponsorship.sponsorshipType).toBe('string');

                expect(activeSponsorship).toHaveProperty('sponsorName');
                expect(typeof activeSponsorship.sponsorName).toBe('string');

                expect(activeSponsorship).toHaveProperty('sponsorLogo');
                expect(typeof activeSponsorship.sponsorLogo).toBe('string');

                expect(activeSponsorship).toHaveProperty('sponsorLink');
                expect(typeof activeSponsorship.sponsorLink).toBe('string');

                expect(activeSponsorship).toHaveProperty('sponsorLogoDimensions');
                expect(typeof activeSponsorship.sponsorLogoDimensions).toBe('object');
            });
        }
    });
});




playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        baseURL: 'https://content.guardianapis.com/',
    }
};
export default config;
