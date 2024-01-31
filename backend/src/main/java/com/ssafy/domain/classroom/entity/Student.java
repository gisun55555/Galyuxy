package com.ssafy.domain.classroom.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.domain.heritage.entity.ArtworkResult;
import jakarta.persistence.*;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "student")
@Getter(AccessLevel.PUBLIC)
@Setter
@NoArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    int id;

    @Column(name = "student_name")
    String studentName;

    @Column(name = "student_no")
    int studentNo;

    @Column(name = "student_is_deleted")
    boolean studentIsDeleted;

    @ManyToOne
    @JoinColumn(name = "group_id")
    @JsonBackReference
    Group group;

    @OneToMany(mappedBy = "student")
    @JsonBackReference
    private List<ArtworkResult> artworkResults;

    public Student(int no, String name ){
        this.studentNo = id;
        this.studentName = name;
        this.studentIsDeleted = false;
    }
}
