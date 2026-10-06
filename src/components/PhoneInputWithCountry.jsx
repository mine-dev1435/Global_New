import React, { useState, useRef, useEffect } from 'react';

// Comprehensive list of countries with flag codes, dial codes, and national digit limits (India first)
const COUNTRIES = [
  { code: '+91', country: 'in', name: 'India', digits: 10, minDigits: 10 },
  { code: '+1', country: 'us', name: 'United States', digits: 10, minDigits: 10 },
  { code: '+44', country: 'gb', name: 'United Kingdom', digits: 10, minDigits: 10 },
  { code: '+61', country: 'au', name: 'Australia', digits: 9, minDigits: 9 },
  { code: '+1', country: 'ca', name: 'Canada', digits: 10, minDigits: 10 },
  { code: '+971', country: 'ae', name: 'United Arab Emirates', digits: 9, minDigits: 9 },
  { code: '+49', country: 'de', name: 'Germany', digits: 11, minDigits: 10 },
  { code: '+65', country: 'sg', name: 'Singapore', digits: 8, minDigits: 8 },
  { code: '+64', country: 'nz', name: 'New Zealand', digits: 10, minDigits: 9 },
  { code: '+353', country: 'ie', name: 'Ireland', digits: 9, minDigits: 9 },
  { code: '+33', country: 'fr', name: 'France', digits: 9, minDigits: 9 },
  { code: '+39', country: 'it', name: 'Italy', digits: 10, minDigits: 9 },
  { code: '+34', country: 'es', name: 'Spain', digits: 9, minDigits: 9 },
  { code: '+41', country: 'ch', name: 'Switzerland', digits: 9, minDigits: 9 },
  { code: '+45', country: 'dk', name: 'Denmark', digits: 8, minDigits: 8 },
  { code: '+46', country: 'se', name: 'Sweden', digits: 9, minDigits: 9 },
  { code: '+31', country: 'nl', name: 'Netherlands', digits: 9, minDigits: 9 },
  { code: '+48', country: 'pl', name: 'Poland', digits: 9, minDigits: 9 },
  { code: '+7', country: 'ru', name: 'Russia', digits: 10, minDigits: 10 },
  { code: '+995', country: 'ge', name: 'Georgia', digits: 9, minDigits: 9 },
  { code: '+60', country: 'my', name: 'Malaysia', digits: 10, minDigits: 9 },
  { code: '+966', country: 'sa', name: 'Saudi Arabia', digits: 9, minDigits: 9 },
  { code: '+974', country: 'qa', name: 'Qatar', digits: 8, minDigits: 8 },
  { code: '+968', country: 'om', name: 'Oman', digits: 8, minDigits: 8 },
  { code: '+965', country: 'kw', name: 'Kuwait', digits: 8, minDigits: 8 },
  { code: '+973', country: 'bh', name: 'Bahrain', digits: 8, minDigits: 8 },
  { code: '+93', country: 'af', name: 'Afghanistan', digits: 9, minDigits: 9 },
  { code: '+355', country: 'al', name: 'Albania', digits: 9, minDigits: 9 },
  { code: '+213', country: 'dz', name: 'Algeria', digits: 9, minDigits: 9 },
  { code: '+376', country: 'ad', name: 'Andorra', digits: 6, minDigits: 6 },
  { code: '+244', country: 'ao', name: 'Angola', digits: 9, minDigits: 9 },
  { code: '+54', country: 'ar', name: 'Argentina', digits: 10, minDigits: 10 },
  { code: '+374', country: 'am', name: 'Armenia', digits: 8, minDigits: 8 },
  { code: '+43', country: 'at', name: 'Austria', digits: 10, minDigits: 10 },
  { code: '+994', country: 'az', name: 'Azerbaijan', digits: 9, minDigits: 9 },
  { code: '+1242', country: 'bs', name: 'Bahamas', digits: 7, minDigits: 7 },
  { code: '+880', country: 'bd', name: 'Bangladesh', digits: 10, minDigits: 10 },
  { code: '+1246', country: 'bb', name: 'Barbados', digits: 7, minDigits: 7 },
  { code: '+375', country: 'by', name: 'Belarus', digits: 9, minDigits: 9 },
  { code: '+32', country: 'be', name: 'Belgium', digits: 9, minDigits: 9 },
  { code: '+501', country: 'bz', name: 'Belize', digits: 7, minDigits: 7 },
  { code: '+229', country: 'bj', name: 'Benin', digits: 8, minDigits: 8 },
  { code: '+975', country: 'bt', name: 'Bhutan', digits: 8, minDigits: 8 },
  { code: '+591', country: 'bo', name: 'Bolivia', digits: 8, minDigits: 8 },
  { code: '+387', country: 'ba', name: 'Bosnia and Herzegovina', digits: 8, minDigits: 8 },
  { code: '+267', country: 'bw', name: 'Botswana', digits: 8, minDigits: 8 },
  { code: '+55', country: 'br', name: 'Brazil', digits: 11, minDigits: 10 },
  { code: '+673', country: 'bn', name: 'Brunei', digits: 7, minDigits: 7 },
  { code: '+359', country: 'bg', name: 'Bulgaria', digits: 9, minDigits: 9 },
  { code: '+226', country: 'bf', name: 'Burkina Faso', digits: 8, minDigits: 8 },
  { code: '+257', country: 'bi', name: 'Burundi', digits: 8, minDigits: 8 },
  { code: '+855', country: 'kh', name: 'Cambodia', digits: 9, minDigits: 9 },
  { code: '+237', country: 'cm', name: 'Cameroon', digits: 9, minDigits: 9 },
  { code: '+56', country: 'cl', name: 'Chile', digits: 9, minDigits: 9 },
  { code: '+86', country: 'cn', name: 'China', digits: 11, minDigits: 11 },
  { code: '+57', country: 'co', name: 'Colombia', digits: 10, minDigits: 10 },
  { code: '+506', country: 'cr', name: 'Costa Rica', digits: 8, minDigits: 8 },
  { code: '+385', country: 'hr', name: 'Croatia', digits: 9, minDigits: 9 },
  { code: '+53', country: 'cu', name: 'Cuba', digits: 8, minDigits: 8 },
  { code: '+357', country: 'cy', name: 'Cyprus', digits: 8, minDigits: 8 },
  { code: '+420', country: 'cz', name: 'Czech Republic', digits: 9, minDigits: 9 },
  { code: '+253', country: 'dj', name: 'Djibouti', digits: 8, minDigits: 8 },
  { code: '+1767', country: 'dm', name: 'Dominica', digits: 7, minDigits: 7 },
  { code: '+1809', country: 'do', name: 'Dominican Republic', digits: 7, minDigits: 7 },
  { code: '+593', country: 'ec', name: 'Ecuador', digits: 9, minDigits: 9 },
  { code: '+20', country: 'eg', name: 'Egypt', digits: 10, minDigits: 10 },
  { code: '+503', country: 'sv', name: 'El Salvador', digits: 8, minDigits: 8 },
  { code: '+372', country: 'ee', name: 'Estonia', digits: 8, minDigits: 8 },
  { code: '+251', country: 'et', name: 'Ethiopia', digits: 9, minDigits: 9 },
  { code: '+679', country: 'fj', name: 'Fiji', digits: 7, minDigits: 7 },
  { code: '+358', country: 'fi', name: 'Finland', digits: 10, minDigits: 9 },
  { code: '+233', country: 'gh', name: 'Ghana', digits: 9, minDigits: 9 },
  { code: '+30', country: 'gr', name: 'Greece', digits: 10, minDigits: 10 },
  { code: '+502', country: 'gt', name: 'Guatemala', digits: 8, minDigits: 8 },
  { code: '+592', country: 'gy', name: 'Guyana', digits: 7, minDigits: 7 },
  { code: '+509', country: 'ht', name: 'Haiti', digits: 8, minDigits: 8 },
  { code: '+504', country: 'hn', name: 'Honduras', digits: 8, minDigits: 8 },
  { code: '+852', country: 'hk', name: 'Hong Kong', digits: 8, minDigits: 8 },
  { code: '+36', country: 'hu', name: 'Hungary', digits: 9, minDigits: 9 },
  { code: '+354', country: 'is', name: 'Iceland', digits: 7, minDigits: 7 },
  { code: '+62', country: 'id', name: 'Indonesia', digits: 12, minDigits: 10 },
  { code: '+98', country: 'ir', name: 'Iran', digits: 10, minDigits: 10 },
  { code: '+964', country: 'iq', name: 'Iraq', digits: 10, minDigits: 10 },
  { code: '+972', country: 'il', name: 'Israel', digits: 9, minDigits: 9 },
  { code: '+1876', country: 'jm', name: 'Jamaica', digits: 7, minDigits: 7 },
  { code: '+81', country: 'jp', name: 'Japan', digits: 10, minDigits: 10 },
  { code: '+962', country: 'jo', name: 'Jordan', digits: 9, minDigits: 9 },
  { code: '+7', country: 'kz', name: 'Kazakhstan', digits: 10, minDigits: 10 },
  { code: '+254', country: 'ke', name: 'Kenya', digits: 9, minDigits: 9 },
  { code: '+996', country: 'kg', name: 'Kyrgyzstan', digits: 9, minDigits: 9 },
  { code: '+856', country: 'la', name: 'Laos', digits: 10, minDigits: 10 },
  { code: '+371', country: 'lv', name: 'Latvia', digits: 8, minDigits: 8 },
  { code: '+961', country: 'lb', name: 'Lebanon', digits: 8, minDigits: 8 },
  { code: '+218', country: 'ly', name: 'Libya', digits: 9, minDigits: 9 },
  { code: '+370', country: 'lt', name: 'Lithuania', digits: 8, minDigits: 8 },
  { code: '+352', country: 'lu', name: 'Luxembourg', digits: 9, minDigits: 9 },
  { code: '+853', country: 'mo', name: 'Macau', digits: 8, minDigits: 8 },
  { code: '+261', country: 'mg', name: 'Madagascar', digits: 9, minDigits: 9 },
  { code: '+960', country: 'mv', name: 'Maldives', digits: 7, minDigits: 7 },
  { code: '+223', country: 'ml', name: 'Mali', digits: 8, minDigits: 8 },
  { code: '+356', country: 'mt', name: 'Malta', digits: 8, minDigits: 8 },
  { code: '+230', country: 'mu', name: 'Mauritius', digits: 8, minDigits: 8 },
  { code: '+52', country: 'mx', name: 'Mexico', digits: 10, minDigits: 10 },
  { code: '+373', country: 'md', name: 'Moldova', digits: 8, minDigits: 8 },
  { code: '+377', country: 'mc', name: 'Monaco', digits: 8, minDigits: 8 },
  { code: '+976', country: 'mn', name: 'Mongolia', digits: 8, minDigits: 8 },
  { code: '+382', country: 'me', name: 'Montenegro', digits: 8, minDigits: 8 },
  { code: '+212', country: 'ma', name: 'Morocco', digits: 9, minDigits: 9 },
  { code: '+258', country: 'mz', name: 'Mozambique', digits: 9, minDigits: 9 },
  { code: '+95', country: 'mm', name: 'Myanmar', digits: 10, minDigits: 9 },
  { code: '+264', country: 'na', name: 'Namibia', digits: 9, minDigits: 9 },
  { code: '+977', country: 'np', name: 'Nepal', digits: 10, minDigits: 10 },
  { code: '+505', country: 'ni', name: 'Nicaragua', digits: 8, minDigits: 8 },
  { code: '+234', country: 'ng', name: 'Nigeria', digits: 10, minDigits: 10 },
  { code: '+389', country: 'mk', name: 'North Macedonia', digits: 8, minDigits: 8 },
  { code: '+47', country: 'no', name: 'Norway', digits: 8, minDigits: 8 },
  { code: '+92', country: 'pk', name: 'Pakistan', digits: 10, minDigits: 10 },
  { code: '+970', country: 'ps', name: 'Palestine', digits: 9, minDigits: 9 },
  { code: '+507', country: 'pa', name: 'Panama', digits: 8, minDigits: 8 },
  { code: '+595', country: 'py', name: 'Paraguay', digits: 9, minDigits: 9 },
  { code: '+51', country: 'pe', name: 'Peru', digits: 9, minDigits: 9 },
  { code: '+63', country: 'ph', name: 'Philippines', digits: 10, minDigits: 10 },
  { code: '+351', country: 'pt', name: 'Portugal', digits: 9, minDigits: 9 },
  { code: '+40', country: 'ro', name: 'Romania', digits: 10, minDigits: 10 },
  { code: '+250', country: 'rw', name: 'Rwanda', digits: 9, minDigits: 9 },
  { code: '+221', country: 'sn', name: 'Senegal', digits: 9, minDigits: 9 },
  { code: '+381', country: 'rs', name: 'Serbia', digits: 9, minDigits: 9 },
  { code: '+248', country: 'sc', name: 'Seychelles', digits: 7, minDigits: 7 },
  { code: '+232', country: 'sl', name: 'Sierra Leone', digits: 8, minDigits: 8 },
  { code: '+421', country: 'sk', name: 'Slovakia', digits: 9, minDigits: 9 },
  { code: '+386', country: 'si', name: 'Slovenia', digits: 8, minDigits: 8 },
  { code: '+252', country: 'so', name: 'Somalia', digits: 8, minDigits: 8 },
  { code: '+27', country: 'za', name: 'South Africa', digits: 9, minDigits: 9 },
  { code: '+82', country: 'kr', name: 'South Korea', digits: 10, minDigits: 10 },
  { code: '+94', country: 'lk', name: 'Sri Lanka', digits: 9, minDigits: 9 },
  { code: '+249', country: 'sd', name: 'Sudan', digits: 9, minDigits: 9 },
  { code: '+963', country: 'sy', name: 'Syria', digits: 9, minDigits: 9 },
  { code: '+886', country: 'tw', name: 'Taiwan', digits: 9, minDigits: 9 },
  { code: '+992', country: 'tj', name: 'Tajikistan', digits: 9, minDigits: 9 },
  { code: '+255', country: 'tz', name: 'Tanzania', digits: 9, minDigits: 9 },
  { code: '+66', country: 'th', name: 'Thailand', digits: 9, minDigits: 9 },
  { code: '+228', country: 'tg', name: 'Togo', digits: 8, minDigits: 8 },
  { code: '+1868', country: 'tt', name: 'Trinidad and Tobago', digits: 7, minDigits: 7 },
  { code: '+216', country: 'tn', name: 'Tunisia', digits: 8, minDigits: 8 },
  { code: '+90', country: 'tr', name: 'Turkey', digits: 10, minDigits: 10 },
  { code: '+993', country: 'tm', name: 'Turkmenistan', digits: 8, minDigits: 8 },
  { code: '+256', country: 'ug', name: 'Uganda', digits: 9, minDigits: 9 },
  { code: '+380', country: 'ua', name: 'Ukraine', digits: 9, minDigits: 9 },
  { code: '+598', country: 'uy', name: 'Uruguay', digits: 8, minDigits: 8 },
  { code: '+998', country: 'uz', name: 'Uzbekistan', digits: 9, minDigits: 9 },
  { code: '+58', country: 've', name: 'Venezuela', digits: 10, minDigits: 10 },
  { code: '+84', country: 'vn', name: 'Vietnam', digits: 10, minDigits: 10 },
  { code: '+967', country: 'ye', name: 'Yemen', digits: 9, minDigits: 9 },
  { code: '+260', country: 'zm', name: 'Zambia', digits: 9, minDigits: 9 },
  { code: '+263', country: 'zw', name: 'Zimbabwe', digits: 9, minDigits: 9 },
];

export default function PhoneInputWithCountry({ 
  name = "phone", 
  placeholder, 
  required = true,
  className = "custom-input",
  style = {}
}) {
  const [selected, setSelected] = useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const inputRef = useRef(null);

  // Automatically reset phone number and country code when the form is reset
  useEffect(() => {
    const form = inputRef.current?.closest('form');
    if (!form) return;
    const handleReset = () => {
      setPhoneNumber('');
      setSelected(COUNTRIES[0]);
    };
    form.addEventListener('reset', handleReset);
    return () => form.removeEventListener('reset', handleReset);
  }, []);

  const maxDigits = selected.digits || 10;
  const minDigits = selected.minDigits || maxDigits;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  // If user switches country and existing number exceeds new maxDigits, clamp it
  useEffect(() => {
    if (phoneNumber.length > maxDigits) {
      setPhoneNumber(phoneNumber.slice(0, maxDigits));
    }
  }, [selected, maxDigits]);

  const handlePhoneChange = (e) => {
    // Only accept numeric digits
    const digitsOnly = e.target.value.replace(/\D/g, '');
    if (digitsOnly.length <= maxDigits) {
      setPhoneNumber(digitsOnly);
    }
  };

  const filtered = COUNTRIES.filter(c => {
    const term = search.toLowerCase().trim();
    if (!term) return true;
    return (
      c.name.toLowerCase().includes(term) ||
      c.code.includes(term) ||
      c.country.toLowerCase().includes(term)
    );
  });

  const dynamicPlaceholder = placeholder || (minDigits === maxDigits 
    ? `${maxDigits}-digit Mobile Number`
    : `${minDigits}-${maxDigits} digit Mobile Number`);

  return (
    <div className="phone-input-group" style={{ position: 'relative', display: 'flex', gap: '8px', width: '100%', alignItems: 'center', marginBottom: '10px', ...style }}>
      {/* Hidden input so FormData picks up country_code */}
      <input type="hidden" name="country_code" value={selected.code} />

      {/* Flag Dropdown Trigger */}
      <div ref={dropdownRef} style={{ position: 'relative', flexShrink: 0 }}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={className}
          title={`${selected.name} (${selected.code}) - Max ${maxDigits} digits`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            width: 'auto',
            minWidth: '98px',
            padding: '8px 10px',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            marginBottom: 0,
            fontSize: '14px',
            fontWeight: 500,
            color: '#1e293b'
          }}
        >
          <img 
            src={`https://flagcdn.com/w40/${selected.country}.png`}
            srcSet={`https://flagcdn.com/w80/${selected.country}.png 2x`}
            alt={selected.name}
            style={{ width: '22px', height: '15px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 0 1px rgba(0,0,0,0.3)' }}
          />
          <span>{selected.code}</span>
          <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px', marginLeft: 'auto', color: '#64748b' }}></i>
        </button>

        {/* Dropdown Options with Search Box */}
        {isOpen && (
          <div 
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              zIndex: 9999,
              width: '280px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
              overflow: 'hidden'
            }}
          >
            {/* Search Input Box */}
            <div style={{ padding: '8px 10px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '10px', color: '#94a3b8', fontSize: '12px' }}></i>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search country or code..."
                  style={{
                    width: '100%',
                    padding: '7px 10px 7px 30px',
                    fontSize: '13px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    color: '#1e293b'
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsOpen(false);
                  }}
                />
              </div>
            </div>

            {/* List of Countries */}
            <div style={{ maxHeight: '240px', overflowY: 'auto', padding: '4px 0' }}>
              {filtered.length > 0 ? (
                filtered.map((item, idx) => (
                  <div
                    key={`${item.country}-${item.code}-${idx}`}
                    onClick={() => {
                      setSelected(item);
                      setIsOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 14px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      color: '#1e293b',
                      backgroundColor: selected.country === item.country ? '#f1f5f9' : 'transparent',
                      transition: 'background-color 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selected.country === item.country ? '#f1f5f9' : 'transparent'}
                  >
                    <img 
                      src={`https://flagcdn.com/w40/${item.country}.png`}
                      alt={item.name}
                      style={{ width: '22px', height: '15px', objectFit: 'cover', borderRadius: '2px', flexShrink: 0, boxShadow: '0 0 1px rgba(0,0,0,0.2)' }}
                    />
                    <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                    <span style={{ fontWeight: 600, color: '#64748b', fontSize: '12px' }}>{item.code}</span>
                  </div>
                ))
              ) : (
                <div style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: '#94a3b8' }}>
                  No countries found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Actual phone number input with enforced digit limit */}
      <input
        ref={inputRef}
        type="tel"
        name={name}
        value={phoneNumber}
        onChange={handlePhoneChange}
        maxLength={maxDigits}
        minLength={minDigits}
        pattern={`[0-9]{${minDigits},${maxDigits}}`}
        title={`Please enter a valid ${minDigits === maxDigits ? maxDigits : `${minDigits}-${maxDigits}`} digit mobile number for ${selected.name}`}
        className={className}
        placeholder={dynamicPlaceholder}
        required={required}
        style={{ flex: 1, width: '100%', marginBottom: 0 }}
      />
    </div>
  );
}
