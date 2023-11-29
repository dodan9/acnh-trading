export interface NewInquiryType {
  title: string;
  content: string;
  email?: string;
}

export interface InquiryDetailType extends NewInquiryType {
  id: number;
  created_at: string;
}
