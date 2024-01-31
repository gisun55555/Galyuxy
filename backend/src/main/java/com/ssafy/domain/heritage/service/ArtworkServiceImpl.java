package com.ssafy.domain.heritage.service;

import com.ssafy.domain.heritage.Dto.ArtworkDto;
import com.ssafy.domain.heritage.Dto.ArtworkMapper;
import com.ssafy.domain.heritage.Dto.ArtworkResultDto;
import com.ssafy.domain.heritage.Dto.ArtworkResultMapper;
import com.ssafy.domain.heritage.entity.Artwork;
import com.ssafy.domain.heritage.entity.ArtworkResult;
import com.ssafy.domain.heritage.repository.ArtworkRepository;
import com.ssafy.domain.heritage.repository.ArtworkResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArtworkServiceImpl implements ArtworkService{

    @Autowired
    private final ArtworkRepository artworkRepository;
    @Autowired
    private final ArtworkResultRepository artworkResultRepository;


    @Override
    public List<Artwork> getByType(int type) {
        return artworkRepository.findByArtworkType(type);
    }

    @Override
    public ArtworkDto getById(int id) {
        Optional<Artwork> artwork = artworkRepository.findById(id);

        return artwork.map(ArtworkMapper::toDto).orElse(null);
    }

    @Override
    public List<ArtworkResultDto> getResultByGroupId(int groupId) {
        List<ArtworkResult> artworkResultList = artworkResultRepository.findByStudentGroupGroupId(groupId);
        return ArtworkResultMapper.toDtoList(artworkResultList);
    }

    @Override
    public List<ArtworkResultDto> getResultByStudentId(int studentId) {
//        return artworkResultRepository.findByStudentId(studentId);
        List<ArtworkResult> artworkResultList = artworkResultRepository.findByStudentId(studentId);
        return ArtworkResultMapper.toDtoList(artworkResultList);
    }

    @Override
    public void saveResult(int type, int studentId, String imageUrl) {
            ArtworkResult artworkResult = new ArtworkResult(studentId, imageUrl);

            artworkResultRepository.save(artworkResult);
    }
}
