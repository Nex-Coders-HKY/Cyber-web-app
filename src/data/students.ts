export interface StudentCertificate {
  certificateId: string;
  studentName: string;
  courseName: string;
  cryptoHash: string;
  issueDate: string;
}

export const INITIAL_CERTIFICATES: Record<string, StudentCertificate> = {
  'CNA-2026-003': {
    certificateId: 'CNA-2026-003',
    studentName: 'Abdul Hadi',
    courseName: 'Basic Computer & MS Office',
    issueDate: 'July 28, 2026',
    cryptoHash: '5c489a8391bf95e95ef7f01e9fc92ab994cd48ee0c447bfe8612c95bb381f981'
  },
  'CNA-2026-004': {
    certificateId: 'CNA-2026-004',
    studentName: 'Muhammad Abdul',
    courseName: 'Basic Computer & MS Office',
    issueDate: 'July 28, 2026',
    cryptoHash: '0174da346cbd3544b2ab320f55da419c6aa00af1d255a2acf7229344eb946e48'
  },
  'CNA-2026-005': {
    certificateId: 'CNA-2026-005',
    studentName: 'Abdul Rafay',
    courseName: 'Graphic Designing',
    issueDate: 'July 28, 2026',
    cryptoHash: 'c2ff041e3610df601f7bf6c5030b00ae212ebc0d4d7c251de64c77cffad3dc93'
  },
  'CNA-2026-006': {
    certificateId: 'CNA-2026-006',
    studentName: 'Abdul Ahad',
    courseName: 'Graphic Designing',
    issueDate: 'July 28, 2026',
    cryptoHash: 'a98a1f4fd6587d87250ffb52ac36087376ae7f1b9d4a684350a3ddaa624005f8'
  },
  'CNA-2026-007': {
    certificateId: 'CNA-2026-007',
    studentName: 'Abdul Wasay',
    courseName: 'Python Programming',
    issueDate: 'July 28, 2026',
    cryptoHash: 'c880a9c6f86307a579120d2aa51c701f437702cd632b8b404adff047ab5ef794'
  },
  'CNA-2026-008': {
    certificateId: 'CNA-2026-008',
    studentName: 'Abdul Basit',
    courseName: 'Python Programming',
    issueDate: 'July 28, 2026',
    cryptoHash: 'e78c263ed38502640ba755cffe5c2767c38e88b36feeac752fde1be950411470'
  },
  'CNA-2026-009': {
    certificateId: 'CNA-2026-009',
    studentName: 'Ali Zia',
    courseName: 'Basic Computer & MS Office',
    issueDate: 'July 28, 2026',
    cryptoHash: '45ab4197ab24889486ca9128d72e4b48219ecfd0bb28123870d9549dc9d5bae7'
  },
  'CNA-2026-010': {
    certificateId: 'CNA-2026-010',
    studentName: 'Krishna',
    courseName: 'Basic Computer & MS Office',
    issueDate: 'July 28, 2026',
    cryptoHash: '4d16c47a3b408f8a03f4e881f4037ddc944922aff109391f711d24d42dcee05c'
  },
  'CNA-2026-011': {
    certificateId: 'CNA-2026-011',
    studentName: 'Fuzail',
    courseName: 'Artificial Intelligence',
    issueDate: 'September 18, 2026',
    cryptoHash: '8981bba95009bdda297f90031db7899ea0650649bf0c7d35b05c60877ef0af1'
  },
  'CNA-2026-012': {
    certificateId: 'CNA-2026-012',
    studentName: 'Muhammad Ebraheem',
    courseName: 'Basic Computer & MS Office',
    issueDate: 'September 18, 2026',
    cryptoHash: 'ba942b7b092ebda1cf0fa47dcc46646aaaadebd4f48863f3f336428f344e50f2'
  },
  'CNA-2026-013': {
    certificateId: 'CNA-2026-013',
    studentName: 'Abdul Sami',
    courseName: 'Basic Computer & MS Office',
    issueDate: 'September 18, 2026',
    cryptoHash: 'a566e158bae798042cb436e32924a5b2fb5fc6ab72524d88287937bc95e86b15'
  },
  'CNA-2026-014': {
    certificateId: 'CNA-2026-014',
    studentName: 'Aqsa',
    courseName: 'Web Development',
    issueDate: 'September 18, 2026',
    cryptoHash: '32b9deebf6308007968bc28cde52fef977f837c39bfa9893d52b463be2be34ef'
  },
  'CNA-2026-015': {
    certificateId: 'CNA-2026-015',
    studentName: 'Abdul Basit',
    courseName: 'Graphic Designing',
    issueDate: 'N/A',
    cryptoHash: '82c184182e2e33ae35fbf0104225381a1ee7b4512d046e5309f89d585d6c2eae'
  }
};