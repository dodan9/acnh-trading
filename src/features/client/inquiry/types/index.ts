export interface NewInquiryType {
  title: string;
  content: string;
  email?: string;
}

export interface InquiryDetailType extends NewInquiryType {
  id: number;
  created_at: string;
}

export interface InquiryAnswerType {
  id: number;
  answer: string;
  created_at: string;
  inquiry_id: number;
}
