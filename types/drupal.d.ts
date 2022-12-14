import {DrupalFile, DrupalMedia, DrupalNode, DrupalParagraph, DrupalTaxonomyTerm} from "next-drupal";
import {JsonApiResource} from "next-drupal/src/types";

// Node Types.
interface BasicPage extends DrupalNode {
  su_basic_page_type?: DrupalTaxonomyTerm[]
  su_page_banner?: DrupalParagraph
  su_page_components?: DrupalParagraph[]
  su_page_description?: string
  su_page_image?: DrupalMedia
  su_shared_tabs?: DrupalTaxonomyTerm[]
}

interface Course extends DrupalNode {
  body?: DrupalWysiwyg
  su_course_academic_year?: string
  su_course_code?: string
  su_course_id?: number
  su_course_instructors?: string[]
  su_course_link?: DrupalLink
  su_course_quarters?: DrupalTaxonomyTerm[]
  su_course_section_units?: string
  su_course_subject?: DrupalTaxonomyTerm
  su_course_tags?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
}

interface Event extends DrupalNode {
  body?: DrupalWysiwyg
  su_event_alt_loc?: DrupalWysiwyg
  su_event_audience?: DrupalTaxonomyTerm[]
  su_event_components?: DrupalParagraph[]
  su_event_cta?: DrupalLink
  su_event_date_time?: DrupalSmartDate
  su_event_dek?: string
  su_event_email?: string
  su_event_groups?: DrupalTaxonomyTerm[]
  su_event_keywords?: DrupalTaxonomyTerm[]
  su_event_location?: DrupalAddress
  su_event_map_link?: DrupalLink
  su_event_schedule?: DrupalParagraph[]
  su_event_source?: DrupalLink
  su_event_sponsor?: string[]
  su_event_subheadline?: string
  su_event_subject?: DrupalTaxonomyTerm[]
  su_event_telephone?: string
  su_event_type?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
}

interface EventSeries extends DrupalNode {
  su_event_series_components: DrupalParagraph[]
  su_event_series_dek: string
  su_event_series_event: DrupalNode[]
  su_event_series_subheadline: string
  su_event_series_type: DrupalTaxonomyTerm[]
  su_event_series_weight: number
  su_shared_tags: DrupalTaxonomyTerm[]
}

interface News extends DrupalNode {
  su_news_banner?: DrupalImageMedia | DrupalVideoMedia
  su_news_banner_media_caption?: string
  su_news_byline?: string
  su_news_components?: DrupalParagraph[]
  su_news_dek?: string
  su_news_featured_media?: DrupalMedia
  su_news_publishing_date?: string
  su_news_source?: DrupalLink
  su_news_topics?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
}

interface Person extends DrupalNode {
  body?: DrupalWysiwyg
  su_person_academic_appt?: string
  su_person_address?: DrupalWysiwyg
  su_person_admin_appts?: string
  su_person_affiliations?: DrupalLink[]
  su_person_components?: DrupalParagraph[]
  su_person_education?: string
  su_person_email?: string
  su_person_fax?: string
  su_person_first_name?: string
  su_person_full_title?: string
  su_person_last_name?: string
  su_person_links?: DrupalLink[]
  su_person_location_address?: DrupalWysiwyg
  su_person_location_name?: string
  su_person_mail_code?: string
  su_person_map_url?: DrupalLink
  su_person_mobile_phone?: string
  su_person_photo?: DrupalImageMedia
  su_person_profile_link?: DrupalLink
  su_person_research?: DrupalWysiwyg[]
  su_person_research_interests?: string
  su_person_scholarly_interests?: DrupalWysiwyg
  su_person_short_title?: string
  su_person_telephone?: string
  su_person_type_group?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
}

interface Publication extends DrupalNode {
  su_publication_author_ref: DrupalNode[]
  su_publication_citation: DrupalPublicationCitation
  su_publication_components: DrupalParagraph[]
  su_publication_cta: DrupalLink
  su_publication_image: DrupalImageMedia
  su_publication_topics: DrupalTaxonomyTerm[]
  su_shared_tags: DrupalTaxonomyTerm[]
}

// Paragraph Types.
interface BannerParagraph extends DrupalParagraph {
  behavior_settings?: {
    hero_pattern?: {
      overlay_position?: string
    }
  }
  su_banner_body?: DrupalWysiwyg
  su_banner_button?: DrupalLink
  su_banner_header?: string
  su_banner_image?: DrupalMedia
  su_banner_sup_header?: string
}

interface CardParagraph extends DrupalParagraph {
  behavior_settings?: object
  su_card_body?: DrupalWysiwyg
  su_card_header?: string
  su_card_link?: DrupalLink
  su_card_link_display?: string
  su_card_media?: DrupalImageMedia | DrupalVideoMedia
  su_card_super_header?: string
}

interface ImageGalleryParagraph extends DrupalParagraph {
  behavior_settings?: object
  su_gallery_button?: DrupalLink
  su_gallery_description?: DrupalWysiwyg
  su_gallery_headline?: string
  su_gallery_images: DrupalGalleryImageMedia[]
}

interface ListParagraph extends DrupalParagraph {
  behavior_settings?: object
  su_list_button?: DrupalLink
  su_list_description?: DrupalWysiwyg
  su_list_headline?: string
  su_list_view: DrupalViewField
}

interface EntityTeaserParagraph extends DrupalParagraph {
  su_entity_button?: DrupalLink
  su_entity_description?: DrupalWysiwyg
  su_entity_headline?: string
  su_entity_item?: DrupalNode[]
}

interface MediaCaptionParagraph extends DrupalParagraph {
  behavior_settings?: object
  su_media_caption_caption?: DrupalWysiwyg
  su_media_caption_link?: DrupalLink
  su_media_caption_media?: DrupalMedia
}

interface WysiwygParagraph extends DrupalParagraph {
  behavior_settings?: object
  su_wysiwyg_text?: DrupalWysiwyg
}

// Media Types.
interface DrupalImageMedia extends DrupalMedia {
  field_media_image: DrupalFile
}

interface DrupalVideoMedia extends DrupalMedia {
  field_media_oembed_video: string
}

interface DrupalFileMedia extends DrupalMedia {
  field_media_file: DrupalFile
}

interface DrupalGalleryImageMedia extends DrupalMedia {
  su_gallery_caption?: string
  su_gallery_image: DrupalFile
}

interface DrupalEmbeddableMedia extends DrupalMedia {
  field_media_embeddable_code?: string
  field_media_embeddable_oembed?: string
}

// Field Structures.
interface DrupalWysiwyg {
  format: string
  processed: string;
  summary?: string;
  value: string;
}

interface DrupalLink {
  options: object
  title: string
  uri: string;
  url: string
}

interface DrupalSmartDate {
  duration: string
  end_value: string
  rrule?: number
  rrule_index?: number
  timezone?: string
  value: string
}

interface DrupalAddress {
  additional_name?: string
  address_line1?: string
  address_line2?: string
  administrative_area?: string
  country_code?: string
  family_name?: string
  given_name?: string
  locality?: string
  organization?: string
  postal_code?: string
  sorting_code?: string
}

interface DrupalName {
  credentials?: string
  family?: string
  generational?: string
  given?: string
  middle?: string
  title?: string
}

interface DrupalViewField  {
  id: string
  resourceIdObjMeta: {
    arguments?: string
    display_id: string
    drupal_internal__target_id: string
    items_to_display?: number
  }
}

// Publication Citation entities.
interface DrupalPublicationCitation extends JsonApiResource {
  changed: string
  created: string
  drupal_internal__id: string
  su_author?: DrupalName[]
  su_day?: number
  su_doi?: string
  su_edition?: number
  su_genre?: any
  su_issue?: string
  su_month?: number
  su_page?: string
  su_publisher?: string
  su_publisher_place?: string
  su_subtitle?: string
  su_url?: DrupalLink
  su_volume?: string
  su_year?: number
}